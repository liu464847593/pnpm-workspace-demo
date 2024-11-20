import { defineConfig } from 'vite'
const path = require('path');
import vue from '@vitejs/plugin-vue'
const glob = require('glob');
const list = {};
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (const file of files) {
    const relativePath = path.relative(dirPath, file);
    const component = relativePath.split(/[/.]/)[0];
    list[component] = `./${file}`;
  }
}

makeList('./', list);
export default defineConfig({
  build: {
    cssCodeSplit:true, // 自定义build需要手动设置cssCodeSplit:true分离css
    lib:{
      entry: list,
      name: 'components',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // 确保 Vue 作为外部依赖
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
})
