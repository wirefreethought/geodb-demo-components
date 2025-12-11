import { defineCustomElement } from 'vue'
import GetTimezonesDemo from "@/components/locale/GetTimezonesDemo.vue";

const ElementCtor = defineCustomElement(GetTimezonesDemo, {
  shadowRoot: false
})

customElements.define('get-timezones-demo', ElementCtor)
