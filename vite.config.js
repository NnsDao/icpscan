import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
    // host:'0.0.0.0',
    port:2222,
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://api.polkacast.network',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'v1')
      },
    },
    cors:true
  },

})
