import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Mainsearch from '@/components/mainsearch'
import Userdash from '@/components/userdash'

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
    }
    // {
    //   path: '/vaults',
    //   name: 'Vaults',
    //   component: Vaults,
    // },
    


  ]
})
