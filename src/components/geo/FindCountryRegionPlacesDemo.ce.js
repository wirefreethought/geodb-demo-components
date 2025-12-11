import { defineCustomElement } from 'vue'
import FindCountryRegionPlacesDemo from '@/components/geo/FindCountryRegionPlacesDemo.vue'

const ElementCtor = defineCustomElement(FindCountryRegionPlacesDemo)
customElements.define('find-country-region-places-demo', ElementCtor)
