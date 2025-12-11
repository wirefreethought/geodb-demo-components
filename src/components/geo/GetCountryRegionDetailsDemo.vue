<template>
  <div id="get-country-region-details-demo">
    <div style="display:flex; flex-direction:column; justify-content:flex-start">
      <pre class="endpoint_operation">{{ endpointOperation }}</pre>
      <div class="form_field">
        <label>Country</label>
        <country-autocomplete @on-country-selected="onCountrySelected($event)" />
      </div>
      <div
        v-if="countryId"
        class="form_field"
      >
        <label>Region</label>
        <region-autocomplete
          :country-id="countryId"
          @on-region-selected="onRegionSelected($event)"
        />
      </div>
      <div
        v-if="regionDetails"
        style="width:100%"
        class="form_field"
      >
        <table>
          <tr><td width="100px" /><td width="250px" /></tr>
          <tr>
            <td>FIPS:</td>
            <td>{{ regionDetails.fipsCode }}</td>
          </tr>
          <tr>
            <td>ISO:</td>
            <td>{{ regionDetails.isoCode }}</td>
          </tr>
          <tr v-if="regionDetails.numCities > 0">
            <td>Cities/Towns:</td>
            <td>{{ regionDetails.numCities }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CountryAutocomplete from '@/shared/components/CountryAutocomplete.vue'
import RegionAutocomplete from '@/shared/components/RegionAutocomplete.vue'

import Config from '@/shared/scripts/config'

const geoApi = new Config.GEO_DB.GeoApi()

export default {
  name: 'GetCountryRegionDetailsDemo',
  components: {
    CountryAutocomplete,
    RegionAutocomplete
  },
  data () {
    return {
      baseEndpointOperation: 'GET /v1/geo/countries',
      countryId: null,
      regionDetails: null
    }
  },
  computed: {
    endpointOperation () {
      let operation = this.countryId
        ? this.baseEndpointOperation + '/' + this.countryId
        : this.baseEndpointOperation + '/{countryId}'

      operation += this.regionDetails
        ? '/regions/' + this.regionDetails.isoCode
        : '/regions/{regionCode}'

      return operation
    }
  },
  methods: {
    onCountrySelected (country) {
      this.countryId = country.code
      this.regionDetails = null
    },
    onRegionSelected (region) {
      const self = this

      geoApi.getRegionUsingGET(this.countryId, region.code, {})
        .then(
          function (data) {
            const response = Config.GEO_DB.RegionResponse.constructFromObject(data)

            self.regionDetails = response.data
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
