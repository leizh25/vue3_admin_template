import { createApp } from 'vue'
import App from '@/App.vue'
//引入全局样式
import '@/styles/index.scss'
//svg插件需要配置的代码
import 'virtual:svg-icons-register'

//引入自定义插件对象:注册整个项目全局组件
import globalComponent from '@/components/index.ts'
//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入路由
import router from '@/router'

//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化的配置
})

//安装自定义插件
app.use(globalComponent)

//注册模板路由
app.use(router)
//将应用挂在到挂载点上
app.mount('#app')
