import { defineConfig } from 'vite'
// import { ViteAliases } from 'vite-aliases'
import { ViteAliases } from './plugins/ViteAliases'
// import { createHtmlPlugin } from 'vite-plugin-html'
import { createHtmlPlugin } from './plugins/VitePluginHtml'
// import { viteMockServe } from 'vite-plugin-mock'
import { viteMockServe } from './plugins/VitePluginMock'

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 指定数组中的依赖不进行依赖预构建
  },
  build: {
    rollupOptions: {
      assetsFieldName: '[hash].[name].[ext]',
    },
  },
  plugins: [
    {
      config(options) {
        console.log('config: ' + options)
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {})
      },
      transformIndexHtml(html) {
        return html
      },
      // after vite config is resolved
      configResolved(resolvedOptions) {
        console.log('最终配置文件\n', resolvedOptions)
      },
      // vite preview
      configurePreviewServer() {},
      /**
       * Universe configures
       */
      options(rollupOptions) {
        console.log('rollupOptions: ', rollupOptions)
      },
      buildStart(resolvedRollupOptions) {
        console.log('resolvedRollupOptions: ', resolvedRollupOptions)
      },
      /**
       * awesome vite
       */
    },
    ViteAliases({
      prefix: '&',
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: '美团',
        },
      },
    }),
    viteMockServe(),
  ],
})
