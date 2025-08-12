const clearBtn = document.querySelector('#clear');
const itemList = document.querySelectorAll('li');
console.log(itemList);

function onClear() {
  // itemList.forEach((item) => item.remove());
  const ul = document.querySelector('ul');
  let itemCount = 0;
  //   while (itemCount < itemList.length) {
  //     itemList[itemCount].remove();
  //     itemCount++;
  //   }
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

//Javascript Event Listeners

// clearBtn.onclick = function () {
//   alert('Clear !');
// };
// clearBtn.onclick = function () {
//   console.log('Clear !');
// };
//AddEventListener
clearBtn.addEventListener('click', onClear);
// setTimeout(() => {
//   clearBtn.removeEventListener('click', onClear);
// }, 5000);

// setTimeout(() => {
//   clearBtn.click();
// }, 5000);
