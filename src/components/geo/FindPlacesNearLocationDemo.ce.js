import { defineCustomElement } from 'vue'
import FindPlacesNearLocationDemo from '@/components/geo/FindPlacesNearLocationDemo.vue'

const ElementCtor = defineCustomElement(FindPlacesNearLocationDemo, {
  shadowRoot: false
})

customElements.define('find-places-near-location-demo', ElementCtor)
