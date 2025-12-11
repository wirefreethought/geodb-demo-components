import { defineCustomElement } from 'vue'
import GetPlaceTimeDemo from "@/components/geo/GetPlaceTimeDemo.vue";

const ElementCtor = defineCustomElement(GetPlaceTimeDemo, {
  shadowRoot: false
})

customElements.define('get-place-time-demo', ElementCtor)
