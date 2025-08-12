const li = document.createElement('li');
li.textContent = 'InsertAfter';
const firstItem = document.querySelector('li');

function insertAfterItem(li, firstItem) {
  firstItem.parentNode.insertBefore(li, firstItem.nextSibling);
}

insertAfterItem(li, firstItem);
// This function inserts a new list item after the first item in the list
// using the insertAdjacentHTML method with 'afterbegin' position.
