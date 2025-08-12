const logo = document.querySelector('img');
const onClick = () => console.log('Logo Clicked!');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    console.log('Logo Double Clicked!');
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('Right Clicked!');
const onMouseDown = () => console.log('Mouse Down!');
const onMouseUp = () => console.log('Mouse Up!');
const onMouseWheel = () => {
  console.log('Wheel Moved!');
};
const onMouseOver = () => {
  console.log('Mouse Over!');
};
const onMouseOut = () => {
  console.log('Mouse Oout!');
};
const onDragStart = () => {
  console.log('Drag Started!');
};
const onDrag = () => {
  console.log('Drag !');
};
const onDragEnd = () => {
  console.log('Drag End Event !');
};
//Event Listners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel, { passive: true });
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
