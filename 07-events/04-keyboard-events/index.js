const itemInput = document.querySelector('#item-input');
itemInput.addEventListener('keypress', (event) => {
  console.log('keypress');
});
itemInput.addEventListener('keyup', (event) => {
  console.log('keyUp');
});
itemInput.addEventListener('keydown', (event) => {
  //key
  //   if (event.key === 'Enter') {
  //     alert('You pressed Enter!');
  //   }
  console.log(event.key); // The key that was pressed

  //keyCode
  if (event.keyCode === 13) {
    alert('You pressed Enter!');
  }
  //code
  if (event.code === 'Digit1') {
    alert('You pressed the 1 key!');
  }

  if (event.repeat) {
    console.log(`Key ${event.key} is being held down`);
  }
  console.log('Shift:', event.shiftKey);
  console.log('Control:', event.ctrlKey);
  console.log('Alt:', event.altKey);
  if (event.shiftKey && event.key === 'K') {
    console.log('Shift + K was pressed!');
  }
});
