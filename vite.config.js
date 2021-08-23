import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import polyfillNode from 'rollup-plugin-polyfill-node'

export default defineConfig({
  plugins: [vue(),polyfillNode()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util'
    },
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      // 选项写法
      // '/api': {
      //   target: 'https://api.baqiye.com',
      //   changeOrigin: true,
      //   // rewrite: (path) => path.replace(/^api\//, 'api')
      // },
      '/api/v2': {
        target: 'https://ic0.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^api\//, '/api/v2/canister')
      },
    },
    // cors:true
  },

})
