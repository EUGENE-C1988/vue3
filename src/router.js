import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import About from './components/About.vue'
import AddSo from './components/AddSo.vue'
import EditPost from './components/EditPost.vue'
import Login from './components/Login.vue'
import SaleOrderList from './components/SaleOrderList.vue'

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
  ]
})
