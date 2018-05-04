// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Customers from './components/Customers'
import About from './components/About'
import VueResource from 'vue-resource'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
//路由设置
const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {path:'/',component:Customers},
    {path:'/about',component:About},
    {path:'/add',component:Add},
    // 一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
    {path:'/customers/:id',component:CustomerDetails},
    {path:'/edit/:id',component:Edit}
  ]
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount("#app")
