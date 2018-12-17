import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Register from './views/Register'
import Landing from './views/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'welcome',
      component: Landing
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
