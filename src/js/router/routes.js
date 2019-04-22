/**
 *
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Single from '../pages/Single.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/page/:id',
    component: Single
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

export default router;
