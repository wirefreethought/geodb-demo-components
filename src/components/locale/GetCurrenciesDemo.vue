<template>
  <div id="get-currencies">
    <div style="display:flex; flex-direction:column; justify-content:start">
      <pre class="endpoint_operation">{{ endpointOperation }}</pre>
    </div>
    <data-table
      :data="currentPageData"
      :columns="columns"
      :count="count"
      :current-page="currentPage"
      :page-size="pageSize"
      @page-changed="onPageChanged"
    />
  </div>
</template>

<script>
import DataTable from '@/shared/components/DataTable.vue'

import Config from '@/shared/scripts/config'
import PageableMixin from '@/shared/scripts/pageable-mixin'

const localeApi = new Config.GEO_DB.LocaleApi()

export default {
  name: 'GetCurrencies',
  components: {
    DataTable
  },
  mixins: [PageableMixin],
  data () {
    return {
      baseEndpointOperation: 'GET /v1/locale/currencies',
      columns: ['code', 'symbol', 'countries']
    }
  },
  computed: {
    endpointOperation () {
      return `${this.baseEndpointOperation}?limit=${this.pageSize}&offset=${this.offset}`
    }
  },
  created: function () {
    this.refreshPageData(0)
  },
  methods: {
    refreshPageData () {
      const self = this

      localeApi.getCurrenciesUsingGET('', {
        limit: this.pageSize,
        offset: this.offset,
        hateoasMode: false
      })
        .then(
          function (data) {
            const response = Config.GEO_DB.CurrenciesResponse.constructFromObject(data)

            const _data = []

            for (const currency of response.data) {
              _data.push({ code: currency.code, symbol: currency.symbol, countries: currency.countryCodes.join(', ') })
            }

            self.count = response.metadata.totalCount
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
