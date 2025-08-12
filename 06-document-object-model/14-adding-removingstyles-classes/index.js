const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');
const button = document.querySelector('button');

function run() {
  console.log(itemList.classList);
  itemList.classList.forEach((item) => {
    console.log(item);
  });

  text.classList.replace('card', 'dark');
  //Change Styles
  //   itemList.style.lineHeight = '3';
  items.forEach((item, index) => {
    item.style.color = 'red';
  });
}
button.onclick = run;
