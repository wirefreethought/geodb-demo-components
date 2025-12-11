import { defineCustomElement } from 'vue'
import GetLanguagesDemo from "@/components/locale/GetLanguagesDemo.vue";

const ElementCtor = defineCustomElement(GetLanguagesDemo, {
  shadowRoot: false
})

customElements.define('get-languages-demo', ElementCtor)
