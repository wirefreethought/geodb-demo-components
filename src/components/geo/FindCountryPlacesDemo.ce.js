import { defineCustomElement } from 'vue'
import FindCountryPlacesDemo from '@/components/geo/FindCountryPlacesDemo.vue'

const ElementCtor = defineCustomElement(FindCountryPlacesDemo, {
  shadowRoot: false
})

customElements.define('find-country-places-demo', ElementCtor)
