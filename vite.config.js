import { defineConfig } from 'vite'
// import { ViteAliases } from 'vite-aliases'
import { ViteAliases } from './plugins/ViteAliases'
// import { createHtmlPlugin } from 'vite-plugin-html'
import { createHtmlPlugin } from './plugins/VitePluginHtml'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 指定数组中的依赖不进行依赖预构建
  },
  plugins: [
    ViteAliases({
      prefix: '&',
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: '美团 NB',
        },
      },
    }),
    viteMockServe(),
  ],
})
