import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import YlService from '../lib/yl-service.es.js'
import '../lib/style.css'

const app = createApp(App)
app.use(router)
app.use(YlService)
app.mount('#app')
