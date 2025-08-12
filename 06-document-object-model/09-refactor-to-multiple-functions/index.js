const button = createButton('remove-item btn-link text-red');
const icon = createIcons('fa-solid fa-xmark');
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}

createNewItem('PIZZA !');
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
}
function createIcons(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}
