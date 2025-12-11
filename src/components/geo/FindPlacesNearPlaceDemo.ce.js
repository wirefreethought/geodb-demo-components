import { defineCustomElement } from 'vue'
import FindPlacesNearPlaceDemo from '@/components/geo/FindPlacesNearLocationDemo.vue'

const ElementCtor = defineCustomElement(FindPlacesNearPlaceDemo)
customElements.define('find-places-near-place-demo', ElementCtor)
