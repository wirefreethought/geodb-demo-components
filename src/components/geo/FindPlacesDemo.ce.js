import { defineCustomElement } from 'vue'
import FindPlacesDemo from '@/components/geo/FindPlacesDemo.vue'

const ElementCtor = defineCustomElement(FindPlacesDemo, {
  shadowRoot: false
})

customElements.define('find-places-demo', ElementCtor)
