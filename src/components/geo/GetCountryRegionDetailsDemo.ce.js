import { defineCustomElement } from 'vue'
import GetCountryRegionDetailsDemo from "@/components/geo/GetCountryRegionDetailsDemo.vue";

const ElementCtor = defineCustomElement(GetCountryRegionDetailsDemo, {
  shadowRoot: false
})

customElements.define('get-country-region-details-demo', ElementCtor)
