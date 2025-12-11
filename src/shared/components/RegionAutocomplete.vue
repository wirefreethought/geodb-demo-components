<template>
  <autocomplete
    :options="currentResults"
    placeholder="Enter region"
    width="150px"
    @input="onNamePrefixChanged"
    @select="onRegionSelected"
  >
    <template #item="region">
      <div class="media">
        <p>
          <strong>{{ region.title }}</strong>
        </p>
      </div>
    </template>
  </autocomplete>
</template>

<script>
import Autocomplete from './Autocomplete.vue'
import Config from '../../shared/scripts/config'

const geoApi = new Config.GEO_DB.GeoApi()

export default {
  name: 'RegionAutocomplete',
  components: {
    Autocomplete
  },
  props: {
    countryId: {
      type: String,
      required: true
    }
  },
  emits: ['onRegionSelected'],
  data () {
    return {
      currentResults: []
    }
  },
  methods: {
    onNamePrefixChanged (prefix) {
      if (prefix.length < 3) {
        return
      }

      const self = this

      geoApi.getRegionsUsingGET(this.countryId, {
        namePrefix: prefix,
        limit: 5,
        offset: 0,
        hateoasMode: false
      }).then(
        function (data) {
          const response = Config.GEO_DB.RegionsResponse.constructFromObject(data)

          const _results = []

          for (const region of response.data) {
            _results.push({ code: region.isoCode, name: region.name })
          }

          self.currentResults = _results
        },

        function (error) {
          console.error(error)
        }
      )
    },
    onRegionSelected (region) {
      this.$emit('onRegionSelected', region)
    }
  }
}
</script>
