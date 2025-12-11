import { defineCustomElement } from 'vue'
import FindPlacesNearLocationDemo from '@/components/geo/FindPlacesNearLocationDemo.vue'

const ElementCtor = defineCustomElement(FindPlacesNearLocationDemo)
customElements.define('find-places-near-location-demo', ElementCtor)
