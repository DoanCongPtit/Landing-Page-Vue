import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainPage from './pages/MainPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const routes = [
    {
      name: 'Register',
      path: '/register',
      component: RegisterPage
    },
    {
      name: 'Index',
      path: '/',
      component: MainPage
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
createApp(App).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.min.js'