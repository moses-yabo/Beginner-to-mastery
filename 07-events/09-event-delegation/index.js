const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.outline = '';
    e.target.style.outline = '1px solid #292929';
  }
});
list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.outline = '';
    e.target.style.outline = '1px solid #292929';
  }
});
// listItem.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });
