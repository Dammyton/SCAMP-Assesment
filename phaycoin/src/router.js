import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/nextpage',
      name: 'nextpage',
      component: () => import('./views/Nextpage.vue')
    },
    {
      path: '/nextpagetwo',
      name: 'nextpagetwo',
      component: () => import('./views/Nextpagetwo.vue')
    },
    {
      path: '/login',
      name: 'loginpage',
      component: () => import('./views/Loginpage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
