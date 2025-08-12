//document.querySelectorAll()

const listItem = document.querySelectorAll('.item');
console.log(listItem);

// listItem.forEach((el, index) => {
//   el.style.color = 'red';
//   if (index === 1) {
//     el.remove();
//   }
//   if (index === 2) {
//     el.innerHTML = `
//          Guava Juicy !
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>

//         `;
//   }
// });
const listItem2 = document.getElementsByClassName('item');
console.log(listItem2);
console.log(listItem2[0].innerText);
Array.from(listItem2).forEach((el) => (el.style.color = ' red'));
const listItem3 = document.getElementsByTagName('li');
console.log(listItem3[0].innerText);
