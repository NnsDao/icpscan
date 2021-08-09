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
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      // 选项写法
      '/api': {
        target: 'https://api.baqiye.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^api\//, 'api')
      },
    },
    // cors:true
  },

})
