import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ToyIndex from '../views/ToyIndex.vue'
import ToyEdit from '../views/ToyEdit.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
      children: [
        {
          path: 'edit/:toyId?',
          name: 'ToyEdit',
          component: ToyEdit,
        },
        // {
        //   path: 'details/:toyId',
        //   name: 'toy-details',
        //   component: ToyDetails,
        // },
      ],
    },
  ]
})

export default router
