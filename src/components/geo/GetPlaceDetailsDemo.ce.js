import { defineCustomElement } from 'vue'
import GetPlaceDetailsDemo from "@/components/geo/GetPlaceDetailsDemo.vue";

const ElementCtor = defineCustomElement(GetPlaceDetailsDemo, {
  shadowRoot: false
})

customElements.define('get-place-details-demo', ElementCtor)
