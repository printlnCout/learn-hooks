import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18nPlugin from './plugins/i18n.js'

const app = createApp(App)

app.use(router)
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bon'
  }
})

app.mount('#app')
