import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

const docsDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    WindiCSS({
      preflight: false,
      scan: {
        dirs: [
          docsDir,
          join(docsDir, '.vitepress', 'theme'),
          join(docsDir, '.vitepress', 'theme', 'components')
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  optimizeDeps: {
    include: ['vue']
  }
})
