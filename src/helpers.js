import axios from 'axios';

import { vault } from './store';

export function createInterval(app, minutes = [50]) {
  setInterval(() => {
    const date = new Date();
    const currentMinute = date.getMinutes();
    const currentHour = date.getHours();

    // check if it's working hours and if the given notification minute is now
    if (!vault.state.workHoursStart < currentHour && !currentHour < vault.state.workHoursEnd) return;
    if (!minutes.includes(currentMinute)) return;

    getRandomExercise().then(exercise => {
      app.$router.push({ path: `/exercises/${exercise[0]}/${exercise[1].id}` });
      const notification = new Notification('Office Workouts', { body: `Do some ${exercise[1].name}!` });
      setTimeout(notification.close.bind(notification), 6000);
    });
  }, 600000);
}

export async function getNotificationPermissions() {
  return Notification.requestPermission().then(permission => {
    // #TODO how to handle non granting responses?
    if (permission === 'granted') {
      const notification = new Notification('Office Workouts', { body: 'You have enabled notifications.' });
      setTimeout(notification.close.bind(notification), 4000);
      return true;
    }

    return false;
  });
}

function strengthOrStretch(chance) {
  // chance 0-1 scaled percentage
  if (Math.random() > chance) return 'strength';

  return 'stretch';
};

export async function getRandomExercise() {
  const type = strengthOrStretch(0.5);
  return axios.get(`${type}.json`)
    .then(response => {
      const exercises = response.data;
      return [type, exercises[Math.floor(Math.random() * exercises.length)]];
    });
}
