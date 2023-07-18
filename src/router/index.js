import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import ToyIndex from '../pages/ToyIndex.vue'
import ToyEdit from '../pages/ToyEdit.vue'
import ToyDetails from '../pages/ToyDetails.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/toy',
      name: 'ToyIndex',
      component: ToyIndex,
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'ToyEdit',
      component: ToyEdit,
    },
    {
      path: '/toy/:toyId',
      name: 'ToyDetails',
      component: ToyDetails,
    },

  ]
})

export default router
