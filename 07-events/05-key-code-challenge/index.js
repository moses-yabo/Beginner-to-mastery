//Method 1
const insert = document.querySelector('#insert');
// document.addEventListener('keydown', (event) => {
//   document.querySelectorAll('.key').forEach((element, index) => {
//     if (index === 0) {
//       element.textContent = event.key;
//     }
//     if (index === 1) {
//       element.textContent = event.keyCode;
//     }
//     if (index === 2) {
//       element.textContent = event.code;
//     }
//   });
// });

//Method 2
// window.addEventListener('keydown', (event) => {
//   insert.innerHTML = `
//     <div class="key">
//       ${event.key === ' ' ? 'Space' : event.key}
//       <small>event.key</small>
//     </div>
//     <div class="key">
//       ${event.keyCode}
//       <small>event.keyCode</small>
//     </div>
//     <div class="key">
//       ${event.code}
//       <small>event.code</small>
//     </div>
//   `;
// });

//Method 3
window.addEventListener('keydown', (event) => {
  insert.innerHTML = '';
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  div1.classList.add('key');
  div2.classList.add('key');
  div3.classList.add('key');
  const eventKey = document.createTextNode(
    event.key === ' ' ? 'Space' : event.key
  );
  const eventKeyCode = document.createTextNode(
    event.keyCode === 32 ? 'Space' : event.keyCode
  );
  const eventCode = document.createTextNode(
    event.code === ' ' ? 'Space' : event.code
  );
  const smallKey = document.createElement('small');
  smallKey.textContent = 'event.key';
  const smallKeyCode = document.createElement('small');
  smallKeyCode.textContent = 'event.keyCode';
  const smallCode = document.createElement('small');
  smallCode.textContent = 'event.code';
  div1.appendChild(eventKey);
  div2.appendChild(eventKeyCode);
  div3.appendChild(eventCode);
  div1.appendChild(smallKey);
  div2.appendChild(smallKeyCode);
  div3.appendChild(smallCode);
  insert.appendChild(div1);
  insert.appendChild(div2);
  insert.appendChild(div3);
});
