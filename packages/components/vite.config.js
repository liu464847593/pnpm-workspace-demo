import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  build: {
    lib:{
      entry: 'index.js',
      name: 'components',
      fileName: (format) => `components.${format}.js`,
    }
  },
  plugins: [vue()],
})
