<template>
  <div id="find-country-region-places-demo">
    <div style="display:flex; flex-direction:column; justify-content:start">
      <pre class="endpoint_operation">{{ endpointOperation }}</pre>
    </div>
    <data-table
      v-if="regionCode"
      :data="currentPageData"
      :columns="columns"
      :count="count"
      :current-page="currentPage"
      :page-size="pageSize"
      @page-changed="onPageChanged"
    />
    <div style="display:flex; flex-direction:column; justify-content:start">
      <div style="display:flex; flex-direction:row; justify-content:start">
        <div class="form_element_container">
          <label>Country</label>
          <country-autocomplete @on-country-selected="onCountrySelected($event)" />
        </div>
        <div
          v-if="country"
          class="form_element_container"
        >
          <label>Region</label>
          <region-autocomplete
            :country-id="country.code"
            @on-region-selected="onRegionSelected($event)"
          />
        </div>
        <place-type
          v-if="regionCode"
          @place-type-changed="onPlaceTypeChanged"
        />
        <div
          v-if="regionCode"
          class="form_element_container"
        >
          <label>Min Population</label><br>
          <input
            v-model="minPopulation"
            placeholder="Minimum population"
            class="form_field"
          >
        </div>
      </div>

      <div style="display:flex; flex-flow:row">
        <sort-by
          :options="sortByOptions"
          @sort-changed="onSortChanged"
        />
        <language @language-changed="onLanguageChanged" />
      </div>

      <div
        v-if="regionCode"
        class="form_element_container"
      >
        <button
          class="form_button"
          @click="onRequestUpdated"
        >
          Update Results
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CountryAutocomplete from '@/shared/components/CountryAutocomplete.vue'
import DataTable from '@/shared/components/DataTable.vue'
import Language from '@/shared/components/Language.vue'
import PlaceType from '@/shared/components/PlaceType.vue'
import RegionAutocomplete from '@/shared/components/RegionAutocomplete.vue'
import SortBy from '@/shared/components/SortBy.vue'

import Config from '@/shared/scripts/config'
import PageableMixin from '@/shared/scripts/pageable-mixin'

const geoApi = new Config.GEO_DB.GeoApi()

export default {
  name: 'FindCountryRegionPlacesDemo',
  components: {
    CountryAutocomplete,
    DataTable,
    Language,
    RegionAutocomplete,
    PlaceType,
    SortBy
  },
  mixins: [PageableMixin],
  data () {
    return {
      baseEndpointOperation: 'GET /v1/geo/countries',
      columns: ['name', 'population', 'location'],

      sortByOptions: [
        { value: 'name', title: 'Name, A-Z' },
        { value: '-name', title: 'Name, Z-A' },
        { value: 'elevation', title: 'Elevation, LO-HI' },
        { value: '-elevation', title: 'Elevation, HI-LO' },
        { value: 'population', title: 'Population, LO-HI' },
        { value: '-population', title: 'Population, HI-LO' }
      ],

      currentRequest: {},

      country: null,
      regionCode: null,
      minPopulation: null,
      type: null,

      sort: null,
      languageCode: null
    }
  },
  computed: {
    endpointOperation () {
      let operation = this.country
        ? this.baseEndpointOperation + '/' + this.country.code
        : this.baseEndpointOperation + '/{countryId}'

      operation += this.regionCode
        ? '/regions/' + this.regionCode + '/places'
        : '/regions/{regionCode}/places'

      operation += '?limit=' + this.pageSize + '&offset=' + this.offset

      if (this.type) {
        operation += '&types=' + this.type
      }

      if (this.minPopulation) {
        operation += '&minPopulation=' + this.minPopulation
      }

      if (this.languageCode) {
        operation += '&languageCode=' + this.languageCode
      }

      if (this.sort) {
        operation += '&sort=' + this.sort
      }

      return operation
    }
  },
  methods: {
    onCountrySelected (country) {
      this.country = country
      this.regionCode = null

      this.onRequestUpdated()
    },
    onLanguageChanged (value) {
      this.languageCode = value
    },
    onPlaceTypeChanged (type) {
      this.type = type
    },
    onRegionSelected (region) {
      this.regionCode = region.code

      this.onRequestUpdated()
    },
    onRequestUpdated () {
      this.currentRequest = {
        countryId: this.country.code,
        regionCode: this.regionCode,
        minPopulation: this.minPopulation,
        sort: this.sort,
        type: this.type
      }
    },
    onSortChanged (sort) {
      this.sort = sort
    },
    refreshPageData () {
      if (!this.country || !this.regionCode) {
        return
      }

      const self = this

      geoApi.findRegionPlacesUsingGET(
        this.country.code,
        this.regionCode,
        {
          types: this.type,
          minPopulation: this.currentRequest.minPopulation,
          languageCode: this.languageCode,
          sort: this.sort,
          limit: this.pageSize,
          offset: this.offset,
          hateoasMode: false
        })
        .then(
          function (data) {
            const placesResponse = Config.GEO_DB.PopulatedPlacesResponse.constructFromObject(data)

            const _data = []

            for (const place of placesResponse.data) {
              let location = place.latitude

              if (place.longitude >= 0) {
                location += '+'
              }

              location += '' + place.longitude

              _data.push({ name: place.name, population: place.population, location })
            }

            self.count = placesResponse.metadata.totalCount
            self.currentPageData = _data
          },

          function (error) {
            console.error(error)
          }
        )
    }
  }
}
</script>

<style scoped>
  @import "../../shared/styles/component.css";
</style>
