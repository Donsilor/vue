import Vue from 'vue'
import Router from 'vue-router'
import index from '../template/index'
import admin_zygl from '../template/admin_zygl'
import admin_home from '../template/admin_home'
import admin_bmgl from '../template/admin_bmgl'
import admin_czrz from '../template/admin_czrz'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: index, 
    redirect: {path: '/'},
    children:[
      {path: '/', component: admin_home},
      {path: 'admin_zygl', component: admin_zygl},
      {path: 'admin_bmgl', component: admin_bmgl},
      {path: 'admin_czrz', component: admin_czrz},
    ]},
  ]
})
