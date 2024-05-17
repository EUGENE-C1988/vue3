import { createApp } from 'vue'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

//vue-navigation-bar
//Vue.component('vue-navigation-bar', VueNavigationBar)

//Pinia
import { createPinia } from 'pinia';
//Vue-Router
import router from './router'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')


