<template>
  <div>
    <div style="display:flex; flex-direction:column; justify-content:flex-start">
      <pre class="endpoint_operation">{{ endpointOperation }}</pre>
      <div>
        NOTE: If you don't see results after a few seconds, it means the service isn't able to determine the admin region based on existing Wikidata.
      </div>
      <div class="form_field">
        <label>Place</label>
        <place-autocomplete @on-place-selected="onPlaceSelected($event)" />
      </div>

      <div
        v-if="containingPlace"
        style="width:100%"
        class="form_field"
      >
        <table>
          <tr><td width="200px" /><td width="250px" /></tr>
          <tr>
            <td>Name:</td>
            <td>{{ containingPlace.name }}</td>
          </tr>
          <tr v-if="containingPlace.region">
            <td>State/Province/Region:</td>
            <td>{{ containingPlace.region }}</td>
          </tr>
          <tr>
            <td>Location (latitude/longitude):</td>
            <td>{{ containingPlace.latitude }}/{{ containingPlace.longitude }}</td>
          </tr>
          <tr>
            <td>Time-Zone:</td>
            <!-- call a method instead of using a filter -->
            <td>{{ formatTimeZone(containingPlace.timezone) }}</td>
          </tr>
          <tr>
            <td>Population:</td>
            <td>{{ containingPlace.population }}</td>
          </tr>
          <tr v-if="containingPlace.elevationMeters">
            <td>Elevation (meters):</td>
            <td>{{ containingPlace.elevationMeters }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceAutocomplete from '@/shared/components/PlaceAutocomplete.vue'

import Config from '@/shared/scripts/config'
import DateTimeUtils from '@/shared/scripts/date-time-utils-mixin'

const geoApi = new Config.GEO_DB.GeoApi()

export default {
  name: 'GetCityAdminRegionDemo',
  components: {
    PlaceAutocomplete
  },
  mixins: [DateTimeUtils],
  data () {
    return {
      baseEndpointOperation: 'GET /v1/geo/places',
      selectedPlaceId: null,
      containingPlace: null
    }
  },
  computed: {
    endpointOperation () {
      const operation = this.containingPlace
        ? this.baseEndpointOperation + '/' + this.selectedPlaceId + '/locatedIn'
        : this.baseEndpointOperation + '/{placeId}/locatedIn'

      return operation
    }
  },
  methods: {
    onPlaceSelected (place) {
      const self = this

      self.selectedPlaceId = place.id

      geoApi.getPlaceLocatedInUsingGET(
        place.id,
        {
          languageCode: this.languageCode
        })
        .then(
          function (data) {
            const response = Config.GEO_DB.PopulatedPlaceResponse.constructFromObject(data)

            self.containingPlace = response.data
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
