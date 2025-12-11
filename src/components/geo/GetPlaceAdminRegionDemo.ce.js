import { defineCustomElement } from 'vue'
import GetPlaceAdminRegionDemo from "@/components/geo/GetPlaceAdminRegionDemo.vue";

const ElementCtor = defineCustomElement(GetPlaceAdminRegionDemo)
customElements.define('get-place-admin-region-demo', ElementCtor)
