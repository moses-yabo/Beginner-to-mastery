// window.onload = function () {};

window.addEventListener('load', () => {
  console.log('Page Loaded');
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded ');
});
console.log('run me !');

window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Window Size: ${window.innerWidth} x ${window.innerHeight}`;
});
window.addEventListener('scroll', () => {
  document.querySelector(
    'h1'
  ).innerText = `ScrollX: ${window.scrollX} , ScrollY ${window.scrollY}`;
  console.log(`ScrollX: ${window.scrollX} , ScrollY ${window.scrollY}`);
  if (window.scrollY > 100) {
    document.body.style.backgroundColor = '#292929';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});
window.addEventListener('focus', (e) => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'green';
  });
});

window.addEventListener('blur', (e) => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'red';
  });
});
