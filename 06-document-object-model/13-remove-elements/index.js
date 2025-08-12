function removeClearBtn() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  if (li) {
    ul.removeChild(li);
  } else {
    console.log(`Item number ${itemNumber} does not exist.`);
  }
}
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 3];
  if (li) {
    ul.removeChild(li);
  } else {
    console.log(`Item number ${itemNumber} does not exist.`);
  }
}
function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

const removeItem4 = () =>
  // removeFirstItem();
  // removeClearBtn();
  removeItem2(1);
removeItem3(2);
