// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'                     // required
import { aliases, mdi } from 'vuetify/iconsets/mdi'   // if you use <v-icon>

import '@mdi/font/css/materialdesignicons.css' // if you use MDI icons

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  }
  // add theme, ssr, etc. here later if you want
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
