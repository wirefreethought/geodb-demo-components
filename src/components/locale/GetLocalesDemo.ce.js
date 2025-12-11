import { defineCustomElement } from 'vue'
import GetLocalesDemo from "@/components/locale/GetLocalesDemo.vue";

const ElementCtor = defineCustomElement(GetLocalesDemo)
customElements.define('get-locales-demo', ElementCtor)
