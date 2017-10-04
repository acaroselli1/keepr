import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Mainsearch from '@/components/mainsearch'
import Userdash from '@/components/userdash'
import Myvaults from '@/components/myvaults'
import Mykeeps from '@/components/mykeeps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/mainsearch',
      name: 'Mainsearch',
      component: Mainsearch,
    },
    {
      path: '/userdash',
      name: 'Userdash',
      component: Userdash,
    },
    {
      path: '/myvaults',
      name: 'Myvaults',
      component: Myvaults,
    },
    {
      path: '/mykeeps',
      name: 'Mykeeps',
      component: Mykeeps,
    }
    


  ]
})
