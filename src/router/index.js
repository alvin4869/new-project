import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newPage',
    name: '新增頁面',
    component: import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        name: 'componentA',
        component: import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        name: 'componentB',
        component: import('../views/ComponentB.vue')
      },
      {
        path: 'namedview',
        component: import('../views/NamedView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
