import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

import { createPinia } from 'pinia';
import router from './router'
createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')


