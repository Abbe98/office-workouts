import Vue from 'vue';
import Router from 'vue-router';
import Exercises from './views/Exercises.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/exercises',
    },
    {
      path: '/exercises',
      beforeEnter: (to, from, next) => {
        // #TODO pick random exercise id
        next('/exercises/1');
      },
    },
    {
      path: '/exercises/:id',
      name: 'exercises',
      component: Exercises,
      props: true,
    },
  ],
});
