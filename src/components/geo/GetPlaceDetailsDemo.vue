<template>
  <div id="get-place-details-demo">
    <div style="display:flex; flex-direction:column; justify-content:flex-start">
      <pre class="endpoint_operation">{{ endpointOperation }}</pre>
      <div class="form_field">
        <label>Place</label>
        <place-autocomplete @on-place-selected="onPlaceSelected($event)" />
      </div>

      <div
        v-if="placeDetails"
        style="width:100%"
        class="form_field"
      >
        <table>
          <tbody>
          <tr>
            <td width="200px"></td>
            <td width="250px"></td>
          </tr>
          <tr v-if="placeDetails.region">
            <td>State/Province/Region:</td>
            <td>{{ placeDetails.region }}</td>
          </tr>
          <tr>
            <td>Location (latitude/longitude):</td>
            <td>{{ placeDetails.latitude }}/{{ placeDetails.longitude }}</td>
          </tr>
          <tr>
            <td>Time-Zone:</td>
            <td>{{ formatTimeZone(placeDetails.timezone) }}</td>
          </tr>
          <tr>
            <td>Population:</td>
            <td>{{ placeDetails.population }}</td>
          </tr>
          <tr v-if="placeDetails.elevationMeters">
            <td>Elevation (meters):</td>
            <td>{{ placeDetails.elevationMeters }}</td>
          </tr>
          </tbody>
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
  name: 'GetPlaceDetailsDemo',
  components: {
    PlaceAutocomplete
  },
  mixins: [DateTimeUtils],
  data () {
    return {
      baseEndpointOperation: 'GET /v1/geo/places',
      placeDetails: null
    }
  },
  computed: {
    endpointOperation () {
      return this.placeDetails
        ? this.baseEndpointOperation + '/' + this.placeDetails.id
        : this.baseEndpointOperation + '/{placeId}'
    }
  },
  methods: {
    onPlaceSelected (place) {
      const self = this

      geoApi.getPlaceUsingGET(
        place.id,
        {
          languageCode: this.languageCode
        }
      )
        .then(
          function (data) {
            const response = Config.GEO_DB.PopulatedPlaceResponse.constructFromObject(data)

            self.placeDetails = response.data
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
