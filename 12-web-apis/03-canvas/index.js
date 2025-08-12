const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw circle

ctx.arc(300, 300, 100, 0, Math.PI * 2); // Circle
ctx.fillStyle = 'red';
ctx.fill();

//Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

//Draw text

ctx.font = '30px Aria';
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 1;
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);
