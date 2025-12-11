<template>
  <div id="get-place-distance-demo">
    <div style="display:flex; flex-direction:column; justify-content:flex-start">
      <pre class="endpoint_operation">{{ endpointOperation }}</pre>
      <div style="display:flex; justify-content:flex-start">
        <div class="form_field">
          <label>From</label>
          <place-autocomplete @on-place-selected="onFromPlaceSelected($event)" />
        </div>
        <div class="form_field">
          <label>To</label>
          <place-autocomplete @on-place-selected="onToPlaceSelected($event)" />
        </div>
        <div
          v-if="distance"
          class="form_field"
        >
          <label>Distance</label>
          <div>{{ distance }} miles</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '@/shared/scripts/config'
import PlaceAutocomplete from '@/shared/components/PlaceAutocomplete.vue'

const geoApi = new Config.GEO_DB.GeoApi()

export default {
  name: 'GetPlaceDistanceDemo',
  components: {
    PlaceAutocomplete
  },
  data () {
    return {
      baseEndpointOperation: 'GET /v1/geo/places',

      fromPlaceId: null,
      toPlaceId: null,
      distance: null
    }
  },
  computed: {
    endpointOperation () {
      let operation = this.toPlaceId
        ? this.baseEndpointOperation + '/' + this.toPlaceId + '/distance'
        : this.baseEndpointOperation + '/{toPlaceId}/distance'

      operation = this.fromPlaceId
        ? operation + '?toPlaceId=' + this.fromPlaceId
        : operation + '?toPlaceId=toPlaceId}'

      return operation
    }
  },
  watch: {
    fromPlaceId: function () {
      this.calculateDistance()
    },
    toPlaceId: function () {
      this.calculateDistance()
    }
  },
  methods: {
    calculateDistance () {
      if (this.fromPlaceId && this.toPlaceId) {
        const self = this

        geoApi.getPlaceDistanceUsingGET(this.toPlaceId, this.fromPlaceId, {})
          .then(
            function (data) {
              self.distance = data.data
            },

            function (error) {
              console.error(error)
            }
          )
      } else {
        this.distance = null
      }
    },
    onFromPlaceSelected (place) {
      this.fromPlaceId = place.id
    },
    onToPlaceSelected (place) {
      this.toPlaceId = place.id
    }
  }
}
</script>

<style scoped>
  @import "../../shared/styles/component.css";
</style>
