import { defineCustomElement } from 'vue'
import GetTimezoneDateTimeDemo from "@/components/locale/GetTimezoneDateTimeDemo.vue";

const ElementCtor = defineCustomElement(GetTimezoneDateTimeDemo, {
  shadowRoot: false
})

customElements.define('get-timezone-time-demo', ElementCtor)
