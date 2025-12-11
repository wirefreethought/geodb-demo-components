import { defineCustomElement } from 'vue'
import FindPlacesDemo from '@/components/geo/FindPlacesDemo.vue'

const ElementCtor = defineCustomElement(FindPlacesDemo)
customElements.define('find-places-demo', ElementCtor)
