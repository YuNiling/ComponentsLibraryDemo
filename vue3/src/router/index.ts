import { createRouter, createWebHistory } from 'vue-router';
import Button from '../components/button.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/button',
    },
    {
      path: '/button',
      component: Button,
    },
  ],
});