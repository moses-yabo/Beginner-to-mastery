const form = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const ul = document.querySelector('ul');
const clearButton = document.querySelector('#clear');
const submitBtn = document.querySelector('form .btn');
const filter = document.querySelector('.filter');
let isEditMode = false;
clearButton.classList.add('hidden');
filter.classList.add('hidden');
let items = getItemsFromStorage();

//Create list item
function createListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}
//Create Button
function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
}
//Create Icon
function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}

//AddItem to storage
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);
  items = itemsFromStorage;

  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  return itemsFromStorage;
}
function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
}
//Render List
function renderList() {
  ul.innerHTML = '';
  items.forEach((item) => {
    const listItem = createListItem(item);
    const button = createButton('remove-item btn-link text-red');
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    listItem.appendChild(button);
    ul.appendChild(listItem);
  });
  updateUIVisibility();
}
//Update UI Visibility
function updateUIVisibility() {
  itemInput.value = '';
  items = getItemsFromStorage();
  const show = items?.length > 0;

  isEditMode = false;

  clearButton.classList.toggle('hidden', !show);
  filter.classList.toggle('hidden', !show);
  submitBtn.innerHTML = '<i class="fa-solid fa-plus"> </i> Add Item';
  submitBtn.style.backgroundColor = '#333';
}
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  itemsFromStorage = itemsFromStorage.filter((el) => el != item);
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
function checkIfItemExist(item) {
  const itemFromStorage = getItemsFromStorage();
  return itemFromStorage.includes(item);
}
function init() {
  // Add Input Event Listener & Attach Event Handler
  itemInput.addEventListener('input', (e) => {
    e.target.style.outline = e.target.value.length <= 3 ? '1px solid red' : '';
  });

  // Add Submit Event Listener & Attach Event Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = itemInput.value.trim();
    if (value.length <= 3) {
      alert(' Please add an item');
      return;
    }
    if (isEditMode) {
      const itemToEdit = ul.querySelector('.edit-mode');
      removeItemFromStorage(itemToEdit.textContent);
      itemToEdit.classList.remove('edit-mode');
      itemToEdit.remove();
      isEditMode = false;
    } else {
      if (checkIfItemExist(value)) {
        updateUIVisibility();
        alert('That item already exist');
        return;
      }
    }
    addItemToStorage(value);
    renderList();
    updateUIVisibility();
  });
  // Add Click Event Listener & Attach Event Handler
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
      const li = e.target.closest('li');
      const text = li.firstChild.textContent.trim();
      if (confirm('Confirm Deletion !')) {
        li.remove();

        removeItemFromStorage(text);

        updateUIVisibility();
      }
    } else {
      setItemToEdit(e.target);
    }
  });
  function setItemToEdit(item) {
    isEditMode = true;
    ul.querySelectorAll('li').forEach((el) => el.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    submitBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Update Item`;
    submitBtn.style.backgroundColor = '#229B22';
    itemInput.value = item.textContent;
  }
  clearButton.addEventListener('click', () => {
    if (confirm('Are you sure !')) {
      ul.innerHTML = '';
      items.length = 0;
      localStorage.clear();
      updateUIVisibility();
    }
  });
  filter.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const items = document.querySelectorAll('li');
    items.forEach((el) => {
      const itemName = el.textContent.trim().toLowerCase();
      if (itemName.includes(text)) {
        el.style.display = 'flex';
      } else {
        el.style.display = 'none';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', renderList);
  updateUIVisibility();
}
init();
