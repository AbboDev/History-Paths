/**
 *
 */

import Home from '../pages/Home.vue';
import Single from '../pages/Single.vue';
import NotFound from '../pages/NotFound.vue';

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

export default routes;
