import { defineCustomElement } from 'vue'
import FindCountryRegionsDemo from '@/components/geo/FindCountryRegionsDemo.vue'

const ElementCtor = defineCustomElement(FindCountryRegionsDemo, {
  shadowRoot: false
})

customElements.define('find-country-regions-demo', ElementCtor)
