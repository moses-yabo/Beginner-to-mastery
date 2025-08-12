const logo = document.querySelector('img');

logo.addEventListener('click', (event) => {
  //   console.log('Event Object:', event.target);
  //   console.log('Event Object:', event.currentTarget);
  //   event.target.style.border = '2px solid red';
  //   console.log(event.type); // Type of event
  //   console.log(event.timeStamp); // Type of event
  //   console.log(event.clientX); // X position of the mouse click relative to the window
  //   console.log(event.clientY); // Y position of the mouse click relative to the window

  //   console.log(event.offsetX); // X position of the mouse click relative to the target element
  //   console.log(event.offsetY); // Y position of the mouse click relative to the target element
  //   console.log(event.pageX); // X position of the mouse click relative to the page
  //   console.log(event.pageY); // Y position of the mouse click relative to the page
  console.log(event.screenX); // X position of the mouse click relative to the screen
  console.log(event.screenY); // Y position of the mouse click relative to the screen
});
logo.addEventListener('drag', (event) => {
  document.querySelector(
    'h1'
  ).textContent = ` X: ${event.clientX}, Y: ${event.clientY}`;
});
// document.addEventListener('click', (event) => {
//   console.log('Event Object:', event.target);
//   console.log('Event Object:', event.currentTarget);
// });
document.querySelector('a').addEventListener('click', (event) => {
  event.preventDefault(); // Prevents the default action of the link
  console.log('Link Clicked!');
});
/*


- 'Target' - the element that triggered the event.

- 'CurrentTarget' - the element that the event listener is attached to.
(These are the same in this case)

- 'Type' - the type of event that occurred (e.g., 'click', 'mouseover').

- 'TimeStamp' - the time at which the event was created.
- 'ClientX  - the x position of the mouse cliclk relative to the window.
- 'ClientY' - the y position of the mouse click relative to the window.
- 'OffsetX' - the x position of the mouse click relative to the target element.
- 'OffsetY' - the y position of the mouse click relative to the target element.
- 'PageX' - the x position of the mouse click relative to the page.
- 'PageY' - the y position of the mouse click relative to the page.
- 'screenX' - the x position of the mouse click relative to the screen.
- 'screenY' - the y position of the mouse click relative to the screen.


*/
