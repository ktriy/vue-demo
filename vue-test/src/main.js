// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import app from "./App.vue"
import {Header, Swipe, SwipeItem} from "mint-ui"
import"mint-ui/lib/style.min.css"
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import"./assets/mui/css/mui.min.css"
import"./assets/mui/css/icons-extra.css"


import VueRouter from 'vue-router'
  Vue.use(VueRouter)
import router from "./router/index.js"

Vue.config.productionTip = false

 import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c=>c(app),
  router
})
