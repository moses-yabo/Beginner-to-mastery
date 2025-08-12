function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');
  const li = document.createElement('li');
  li.textContent = 'Replaced First';
  firstItem.replaceWith(li);
}
function replaceSecond() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced Second</li>';
}
function replaceAll() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach((item, index) => {
    if (index === 0) {
      item.outerHTML = '<li>  First Item </li>';
    }
    if (index === 1) {
      item.outerHTML = '<li>  Second Item </li>';
    }
    if (index === 2) {
      item.outerHTML = '<li>  third Item </li>';
    }
    if (index === 3) {
      item.outerHTML = '<li>  Fourth Item </li>';
    }
  });
  console.log(listItems);
}
function replaceChild() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');
  const h2 = document.createElement('h2');
  h2.textContent = ' Shopping List';
  header.replaceChild(h2, h1);
}
replaceFirstItem();
replaceSecond();
replaceAll();
replaceChild();
