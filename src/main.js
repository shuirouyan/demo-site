import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElMessage } from 'element-plus'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.config.globalProperties = {
    message: ElMessage,
    axios: axios
}
app.mount('#app')
