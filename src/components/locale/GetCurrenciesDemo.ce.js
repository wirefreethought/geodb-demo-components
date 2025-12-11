import { defineCustomElement } from 'vue'
import GetCurrenciesDemo from "@/components/locale/GetCurrenciesDemo.vue";

const ElementCtor = defineCustomElement(GetCurrenciesDemo)
customElements.define('get-currencies-demo', ElementCtor)
