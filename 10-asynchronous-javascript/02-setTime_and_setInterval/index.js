function changeTest() {
  document.querySelector('h1').textContent = 'Hello from call back';
}

let timerId;
const buttons = document.querySelectorAll('button');
buttons[0].addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = Math.ceil(Math.random() * 29292955 + 1).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.querySelector('h1').textContent = randomColor;
  }, 3000);
});
buttons[1].addEventListener('click', () => {
  clearInterval(timerId);
});
