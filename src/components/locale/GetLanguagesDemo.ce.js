import { defineCustomElement } from 'vue'
import GetLanguagesDemo from "@/components/locale/GetLanguagesDemo.vue";

const ElementCtor = defineCustomElement(GetLanguagesDemo)
customElements.define('get-languages-demo', ElementCtor)
