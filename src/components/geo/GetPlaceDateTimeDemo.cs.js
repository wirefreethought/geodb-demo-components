import { defineCustomElement } from 'vue'
import GetPlaceDateTimeDemo from "@/components/geo/GetPlaceDateTimeDemo.vue";

const ElementCtor = defineCustomElement(GetPlaceDateTimeDemo, {
  shadowRoot: false
})

customElements.define('get-place-date-time-demo', ElementCtor)
