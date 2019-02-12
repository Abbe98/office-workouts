import Vue from 'vue';
import Router from 'vue-router';
import Exercises from './views/Exercises';
import { getRandomExercise } from './helpers';

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
        getRandomExercise().then(exercise => {
          next(`/exercises/${exercise[0]}/${exercise[1].id}`);
        });
      },
    },
    {
      path: '/exercises/:type/:id',
      name: 'exercises',
      component: Exercises,
      props: true,
    },
  ],
});
