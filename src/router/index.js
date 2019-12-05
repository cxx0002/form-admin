import Vue from 'vue'
import Router from 'vue-router'
import Add from '../pages/add'
import Search from '../pages/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
    },
    {
      path:'/add',
      name:'Add',
      component:Add
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    }
  ]
})
