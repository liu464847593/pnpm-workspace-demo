import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  test:{
    environment: 'happy-dom', // 默认是nodejs环境 测试web应用需要指定happy-dom
  }
})
