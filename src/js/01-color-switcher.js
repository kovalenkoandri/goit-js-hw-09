
const refs = {};
refs.btnStart = document.querySelector('button[data-start]');
refs.btnStop = document.querySelector('button[data-stop]');
refs.body = document.querySelector('body');
let timerId = null;
refs.btnStart.addEventListener('click', () => {
    timerId = setInterval(() => refs.body.style.backgroundColor = getRandomHexColor(), 2000);
    refs.btnStart.disabled = true;
});
refs.btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}