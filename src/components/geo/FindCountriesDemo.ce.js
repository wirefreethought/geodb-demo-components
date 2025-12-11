import { defineCustomElement } from 'vue'
import FindCountriesDemo from '@/components/geo/FindCountriesDemo.vue'

const ElementCtor = defineCustomElement(FindCountriesDemo, {
  shadowRoot: false
})

customElements.define('find-countries-demo', ElementCtor)
