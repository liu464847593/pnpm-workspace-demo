import { createApp } from 'vue'
import App from './App.vue'

import DemoComponents from '@l-org/pnpm-workspace-demo-components'
const app = createApp(App)
app.use(DemoComponents)
app.mount('#app')
