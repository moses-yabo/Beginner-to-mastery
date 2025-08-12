const div = document.createElement('div');
div.setAttribute('title', 'my-element');

const text = document.createTextNode('HEllo world');

div.appendChild(text);
div.innerText = 'Hello world';
console.log(div);
document.querySelector('ul').appendChild(div);
