import { defineCustomElement } from 'vue'
import GetPlaceAdminRegionDemo from "@/components/geo/GetPlaceAdminRegionDemo.vue";

const ElementCtor = defineCustomElement(GetPlaceAdminRegionDemo, {
  shadowRoot: false
})

customElements.define('get-place-admin-region-demo', ElementCtor)
