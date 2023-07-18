import { defineConfig } from 'vite'
import {ViteAliases} from 'vite-aliases'
import MyViteAliases from './plugins/ViteAliases'

export default defineConfig({
  optimizeDeps: {
    exclude: [] // 指定数组中的依赖不进行依赖预构建
  },
  plugins: [
    // ViteAliases({
    //   prefix: '&'
    // })
    MyViteAliases()
  ]
})
