const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

console.log(button);
button.addEventListener('click', (e) => {
  alert('Button Clicked!');
  e.stopPropagation();
});
div.addEventListener('click', (e) => {
  alert('Div Clicked!');
});
document.querySelector('form').addEventListener('click', (e) => {
  alert('Form Clicked!');
});
document.body.addEventListener('click', (e) => {
  alert('Body Clicked!');
});
document.addEventListener('click', (e) => {
  alert('Document Clicked!');
});
window.addEventListener('click', (e) => {
  alert('Window Clicked!');
});
