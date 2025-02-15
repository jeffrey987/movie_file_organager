// router.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue') // 确保路径正确
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('@/views/UploadView.vue')
  }
]

// 必须导出 router 实例
export const router = createRouter({
  history: createWebHistory(),
  routes
})

// 如果是默认导出（推荐）
export default router