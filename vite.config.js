import { defineConfig } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'
import { loadEnv } from 'vite'

const envResolver = {
  build: () => {
    console.log('生产环境')
    return { ...viteBaseConfig, ...viteProdConfig }
  },
  serve: () => {
    console.log('开发环境')
    return { ...viteBaseConfig, ...viteDevConfig }
  },
}

export default defineConfig(({ command, mode }) => {
  console.log('mode\n', mode)
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env.BASE_URL:\n', env.MEI_TUAN_BASE_URL)
  return envResolver[command]()
})
