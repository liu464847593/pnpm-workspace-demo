import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib:{
      entry: './index.js',
      name: 'utils',
      fileName: (format) => `utils.${format}.js`,
    }
  },
})
