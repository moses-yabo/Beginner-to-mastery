const heading = document.querySelector('h1');
const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority');
const checkboxInput = document.querySelector('#checkbox');
const filterInput = document.querySelector('#filter');

function onInput(e) {
  heading.textContent = e.target.value;
}
function onChecked(e) {
  heading.textContent = e.target.checked ? 'Checked' : 'Unchecked';
}
function onFocus(e) {
  console.log('Input focused');
  e.target.style.outline = '1px solid blue';
}
function onBlur(e) {
  e.target.style.outline = '1px solid red';
}
itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkboxInput.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
