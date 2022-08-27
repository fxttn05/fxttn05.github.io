import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: () => import('../views/PersonalView.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
  ]
})

export default router
