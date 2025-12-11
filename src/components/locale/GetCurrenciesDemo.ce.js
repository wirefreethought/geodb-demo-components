import { defineCustomElement } from 'vue'
import GetCurrenciesDemo from "@/components/locale/GetCurrenciesDemo.vue";

const ElementCtor = defineCustomElement(GetCurrenciesDemo, {
  shadowRoot: false
})

customElements.define('get-currencies-demo', ElementCtor)
