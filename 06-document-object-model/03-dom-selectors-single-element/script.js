//document.getElementbyId()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//Set Attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');

//Get or Change Content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = ' HEllo Again';
title.innerHTML = '<strong> SHOPPING LIST </strong>';

//Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);
const second = document.querySelector('li:nth-child(2)');
second.innerText = 'Apple Juice';
second.style.color = 'red';

//Use These Methods on Othert element

const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');

firstItem.style.color = 'green';
