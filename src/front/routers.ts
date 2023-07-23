import { createRouter, createWebHistory } from 'vue-router'
import {SignInModule} from '@f/signin'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      children:[]
    },
    SignInModule.router,
  ]
})

export default router
