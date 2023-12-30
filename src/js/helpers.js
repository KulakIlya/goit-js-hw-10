const timerValues = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

export function updateTime(selectedDate) {
  const { days, hours, minutes, seconds } = convertMs(
    selectedDate - Date.now()
  );

  timerValues.days.textContent = days;
  timerValues.hours.textContent = hours;
  timerValues.minutes.textContent = minutes;
  timerValues.seconds.textContent = seconds;
}

export function convertMs(ms) {
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

export function addingLeadingZero(value) {
  return String(value).padStart(2, '0');
}
