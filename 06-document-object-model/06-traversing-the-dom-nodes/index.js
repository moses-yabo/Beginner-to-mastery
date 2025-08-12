let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';
output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.textContent = ' Hello';

//Parent Node
const child = document.querySelector('.child');
output = child.parentNode;
child.parentNode.style.padding = '10px';
child.parentNode.style.backgroundColor = '#ccc';

//Siblings
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;
console.log(output);
