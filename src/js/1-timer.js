import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('.btn');
const timerValues = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

let selectedDate;

startBtn.addEventListener('click', onStartClick);

const flatpickrConfig = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate - Date.now() <= 0) {
      startBtn.setAttribute('disabled', true);
      return iziToast.error(errorToastConfig);
    }

    startBtn.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', flatpickrConfig);

const errorToastConfig = {
  title: 'Error',
  message: 'Please choose a date in the future',
  position: 'topRight',
  backgroundColor: '#EF4040',
  titleColor: '#ffffff',
  messageColor: '#ffffff',
  iconUrl: '../img/icon-error.svg',
};

function updateTime() {
  const { days, hours, minutes, seconds } = convertMs(
    selectedDate - Date.now()
  );

  console.log(timerValues.seconds.value);

  timerValues.days.textContent = days;
  timerValues.hours.textContent = hours;
  timerValues.minutes.textContent = minutes;
  timerValues.seconds.textContent = seconds;
}

function onStartClick() {
  const interval = setInterval(updateTime, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addingLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addingLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addingLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addingLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addingLeadingZero(value) {
  return String(value).padStart(2, '0');
}
