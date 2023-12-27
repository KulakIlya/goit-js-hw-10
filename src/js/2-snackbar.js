import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
      if (isFulfilled)
        return iziToast.success({
          ...baseIziToastConfig,
          title: 'OK',
          message: `Fulfilled promise in ${delay}ms`,
          backgroundColor: '#59A10D',
          iconUrl: '../img/icon-success.svg',
        });

      iziToast.error({
        ...baseIziToastConfig,
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        backgroundColor: '#EF4040',
        iconUrl: '../img/icon-error.svg',
      });
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  const { delay, state } = e.target.elements;
  promiseGenerator(state.value === 'fulfilled', Number(delay.value));
}
