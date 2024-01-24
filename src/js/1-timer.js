import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from '../img/icon-error.svg';
import { convertMs } from './helpers';

const startBtn = document.querySelector('.btn');
const input = document.querySelector('input[id="datetime-picker"]');

let selectedDate;
let interval;
const timerValues = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

const updateTime = () => {
  const { days, hours, minutes, seconds } = convertMs((selectedDate -= 1000));

  timerValues.days.textContent = days;
  timerValues.hours.textContent = hours;
  timerValues.minutes.textContent = minutes;
  timerValues.seconds.textContent = seconds;

  if (!Number(days) && !Number(hours) && !Number(minutes) && !Number(seconds))
    clearInterval(interval);
};

const onStartClick = () => {
  interval = setInterval(updateTime, 1000);
  startBtn.setAttribute('disabled', true);
};

startBtn.addEventListener('click', onStartClick);

const errorToastConfig = {
  title: 'Error',
  message: 'Please choose a date in the future',
  position: 'topRight',
  backgroundColor: '#EF4040',
  titleColor: '#ffffff',
  messageColor: '#ffffff',
  iconUrl: iconError,
};

const flatpickrConfig = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0] - Date.now();
    if (selectedDate <= 0) {
      startBtn.setAttribute('disabled', true);
      iziToast.error(errorToastConfig);
      return;
    }

    startBtn.removeAttribute('disabled');
    input.setAttribute('disabled', true);
  },
};
flatpickr('#datetime-picker', flatpickrConfig);
