import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from '../img/icon-error.svg';

import { updateTime } from './helpers';

const startBtn = document.querySelector('.btn');

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
  iconUrl: iconError,
};

function onStartClick() {
  const interval = setInterval(() => updateTime(selectedDate), 1000);
}
