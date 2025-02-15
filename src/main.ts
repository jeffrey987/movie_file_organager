// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router' // 确保导入路径正确
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
console.log('路由配置:', router.getRoutes()) // 打印所有路由规则
app.mount('#app')