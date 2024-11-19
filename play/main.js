import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import DemoComponents from '@l-org/pnpm-workspace-demo-components'
const app = createApp(App)
app.use(ElementPlus)
app.use(DemoComponents)
app.mount('#app')
