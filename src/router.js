import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Pages/PageHome';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-current',
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Main',
      meta: { title: 'Veronika' },
      component: Home,
    },
  ],
});
