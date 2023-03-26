let randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

let timerId = null;
stop.disabled = true;
start.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
  start.disabled = true;
  stop.disabled = false;
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.disabled = false;
  stop.disabled = true;
  document.body.style.backgroundColor = '#ffffff';
});
