import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(function time() {
      if (shouldResolve) {
        resolve({ position, delay });
    } else {
        reject({ position, delay });
    }
  }, delay);
  });
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const stringDelay = event.currentTarget.elements.delay.value;
  const stringStep = event.currentTarget.elements.step.value;
  const stringAmount = event.currentTarget.elements.amount.value;
  let delay = Number(stringDelay);
  let step = Number(stringStep);
  const amount = Number(stringAmount);
  console.log('start load cache');
  const before = Date.now();
  for (let position = 1; position <= amount; position += 1) {
    if (position > 1) {
      delay += step;
      } 
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          const after = Date.now();
          console.log('cache load ok executed in', (after - before) / 1000);
      })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          const after1 = Date.now();
          console.log('cache load1 ok executed in', (after1 - before) / 1000);
        });
      }
});
