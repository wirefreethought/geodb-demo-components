import { defineCustomElement } from 'vue'
import GetCountryDetailsDemo from "@/components/geo/GetCountryDetailsDemo.vue";

const ElementCtor = defineCustomElement(GetCountryDetailsDemo, {
  shadowRoot: false
})

customElements.define('get-country-details-demo', ElementCtor)
