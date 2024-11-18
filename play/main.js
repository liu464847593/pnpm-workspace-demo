import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import CsSelect from '../packages/components/select';
const app = createApp(App)
app.use(ElementPlus)
app.use(CsSelect)
app.mount('#app')
