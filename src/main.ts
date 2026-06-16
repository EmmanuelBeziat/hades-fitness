import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#hadesFitness')

console.log('%c Made with 🕑 and 💖 by Emmanuel Béziat.', 'background: #8ca7cc; color: #0b191f; padding: .5em 1em;')
