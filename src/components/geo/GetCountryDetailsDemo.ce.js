import { defineCustomElement } from 'vue'
import GetCountryDetailsDemo from "@/components/geo/GetCountryDetailsDemo.vue";

const ElementCtor = defineCustomElement(GetCountryDetailsDemo)
customElements.define('get-country-details-demo', ElementCtor)
