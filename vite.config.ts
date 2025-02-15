import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需要安装 @types/node

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 关键配置
      'views': path.resolve(__dirname, './src/views') // 可选额外别名
    }
  }
})