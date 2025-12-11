import { defineCustomElement } from 'vue'
import GetLocalesDemo from "@/components/locale/GetLocalesDemo.vue";

const ElementCtor = defineCustomElement(GetLocalesDemo, {
  shadowRoot: false
})

customElements.define('get-locales-demo', ElementCtor)
