import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
export default defineConfig({
  server: {
    proxy: {
      api: {
        target: 'http://www.360.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) return 'lodash'
        },
      },
    },
  },
})
