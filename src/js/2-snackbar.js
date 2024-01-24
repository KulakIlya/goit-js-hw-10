import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from '../img/icon-error.svg';
import iconSuccess from '../img/icon-success.svg';

const baseIziToastConfig = {
  position: 'topRight',
  maxWidth: '383px',
  titleColor: '#ffffff',
  messageColor: '#ffffff',
};

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function promiseGenerator(isFulfilled, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) resolve();
      else reject();
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  const { delay, state } = e.target.elements;
  promiseGenerator(state.value === 'fulfilled', Number(delay.value))
    .then(() => {
      iziToast.success({
        ...baseIziToastConfig,
        title: 'OK',
        message: `Fulfilled promise in ${delay.value}ms`,
        backgroundColor: '#59A10D',
        iconUrl: iconSuccess,
      });
    })
    .catch(() => {
      iziToast.error({
        ...baseIziToastConfig,
        title: 'Error',
        message: `Rejected promise in ${delay.value}ms`,
        backgroundColor: '#EF4040',
        iconUrl: iconError,
      });
    });
}
