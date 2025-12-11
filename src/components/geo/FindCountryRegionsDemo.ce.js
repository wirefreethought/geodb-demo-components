import { defineCustomElement } from 'vue'
import FindCountryRegionsDemo from '@/components/geo/FindCountryRegionsDemo.vue'

const ElementCtor = defineCustomElement(FindCountryRegionsDemo)
customElements.define('find-country-regions-demo', ElementCtor)
