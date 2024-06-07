import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import AddSo from './components/AddSo.vue'
import EditPost from './components/EditPost.vue'
import Login from './components/Login.vue'
import SaleOrderList from './components/SaleOrderList.vue'
import Logout from './components/Logout.vue'
import SystemAuth_Role_Account from './components/SystemAuth_Role_Account.vue'

export default createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/edit/:id',
      name: 'editPost',
      component: EditPost
    },
    {
      path: '/add',
      name: 'AddSo',
      component: AddSo
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/solist',
      name: 'solist',
      component: SaleOrderList
    },
    {
      path: '/SysAuthR',
      name: 'SysAuthR',
      component: SystemAuth_Role_Account
    },
  ]
})
