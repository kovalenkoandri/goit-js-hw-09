// const form = document.querySelector('.form');
// const input = document.querySelector('input[name="amount"]');
  console.log('start load cache');
  const before = Date.now();
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
// form.addEventListener('submit', event => {
  // event.preventDefault();
  // const stringDelay = event.currentTarget.elements.delay.value;
  // const stringStep = event.currentTarget.elements.step.value;
  // const stringAmount = event.currentTarget.elements.amount.value;
  // let delay = Number(stringDelay);
(function n() {

  // my loading from mongo
  
  let delay = 3000;
  // const step = Number(stringStep);
  let step = 1000;
  const stepLogged = step;
  // const amount = Number(stringAmount);
  const amount = 3;
  let position = 0;
 setTimeout(function time() {
    const intervalId = setInterval(function () {
      position += 1;
      if (position === 1) {
        step = delay;
      }
      if (position >= amount) {
        clearInterval(intervalId);
      }
      createPromise(position, delay);
      delay += stepLogged;
      const after = Date.now();
      console.log('cache load ok executed in', (after - before) / 1000);
    }, step);
   const after1 = Date.now();
   console.log('cache load1 ok executed in', (after1 - before) / 1000);
 }, delay);
  
}());
// });

