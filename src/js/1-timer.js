import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('.btn');

let selectedDate;

startBtn.addEventListener('click', () => {
  if (selectedDate - Date.now() <= 0)
    alert('Please choose a date in the future');
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
  },
});
