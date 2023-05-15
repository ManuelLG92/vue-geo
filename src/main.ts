import './assets/main.css'

import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
