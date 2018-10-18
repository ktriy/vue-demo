
import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router)


import Home from "../components/tabbar/home.vue"
import Menber from "../components/tabbar/menber.vue"
import Shopcar from "../components/tabbar/shopcar.vue"
import Search from "../components/tabbar/search.vue"



var router =new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/menber', component: Menber},
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search}
  ],
  linkActiveClass: 'mui-active'
})
export default router
