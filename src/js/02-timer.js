import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  input: document.querySelector('input[id="datetime-picker"]'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
refs.btnStart.disabled = true;
flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now())
      Notify.failure('Please choose a date in the future');
    //   window.alert('Please choose a date in the future');
    else {
      refs.btnStart.disabled = false;
      refs.input.disabled = true;
      refs.btnStart.addEventListener('click', () => {
        const timerId = setInterval(() => {
          refs.btnStart.disabled = true;
          const obj = convertMs(selectedDates[0] - Date.now());
          const delta = selectedDates[0] - Date.now();
          refs.days.textContent = addLeadingZero(obj.days);
          refs.hours.textContent = addLeadingZero(obj.hours);
          refs.minutes.textContent = addLeadingZero(obj.minutes);
          refs.seconds.textContent = addLeadingZero(obj.seconds);
          if (
            delta <= 1000
          ) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    }
  },
});
function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
