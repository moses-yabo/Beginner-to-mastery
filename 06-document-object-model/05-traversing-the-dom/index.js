//GEt child Element
let output;
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[0].innerText;
output = parent.children[0].className;
output = parent.children[0].nodeName;
output = parent.children[0].innerText = 'CHild One';
parent.children[0].style.color = 'red';
parent.firstElementChild.innerText = 'CHiLd WOKUQALA';
parent.lastElementChild.innerText = 'CHiLd WOKUgcina';

//Get Parent Elements From  CHild
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//Siblings elements

const secondChild = document.querySelector('.child:nth-child(2)');
output = secondChild.textContent;
output = secondChild.nextElementSibling;
secondChild.nextElementSibling.style.color = 'green';
secondChild.previousElementSibling.style.color = 'orange';
console.log(output);
