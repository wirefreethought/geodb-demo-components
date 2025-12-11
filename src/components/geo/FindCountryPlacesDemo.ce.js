import { defineCustomElement } from 'vue'
import FindCountryPlacesDemo from '@/components/geo/FindCountryPlacesDemo.vue'

const ElementCtor = defineCustomElement(FindCountryPlacesDemo)
customElements.define('find-country-places-demo', ElementCtor)
