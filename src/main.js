import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElMessage from 'element-plus'

let app = createApp(App)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.config.globalProperties = {
    $message: ElMessage
}
app.mount('#app')
