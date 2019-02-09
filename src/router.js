import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import Exercises from './views/Exercises.vue';

Vue.use(Router);

const routerRequestHandler = axios.create();

function strengthOrStretch() {
  // #TODO settings and time driven in the future
  if (Math.random() > 0.5) return 'strength';

  return 'stretch';
};

async function getRandomExercise() {
  const type = strengthOrStretch();
  return routerRequestHandler.get(`${type}.json`)
    .then(response => {
      const exercises = response.data;
      return exercises[Math.floor(Math.random() * exercises.length)].id;
    });
}

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
          next(`/exercises/${exercise}`);
        });
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
