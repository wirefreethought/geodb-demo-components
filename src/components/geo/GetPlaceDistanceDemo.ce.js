import { defineCustomElement } from 'vue'
import GetPlaceDistanceDemo from "@/components/geo/GetPlaceDistanceDemo.vue";

const ElementCtor = defineCustomElement(GetPlaceDistanceDemo, {
  shadowRoot: false
})

customElements.define('get-place-distance-demo', ElementCtor)
