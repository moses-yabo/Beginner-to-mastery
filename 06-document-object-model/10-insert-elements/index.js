//InsertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');
  const h1 = document.createElement('h1');
  h1.textContent = 'InsertAdjacentElement';
  filter.insertAdjacentElement('afterend', h1);
}
//insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li');
  item.insertAdjacentText('afterend', 'insertAdjacentText');
}
//insertAdjacentHTML Example
function insertHTML() {
  const clear = document.querySelector('#clear');
  console.log(clear);

  clear.insertAdjacentHTML('beforeend', '<h1>insertAdjacentHTML</h1> ');
}
//InsertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'InsertBefore';
  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

/*
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
*/
insertText();
insertElement();
insertHTML();
insertBeforeItem();
