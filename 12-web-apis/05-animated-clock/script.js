const canvas = document.getElementById('canvas');
const faceColor = document.querySelector('input#face-color');
const borderColor = document.querySelector('input#border-color');
const lineColor = document.querySelector('input#line-color');
const largeHandsColor = document.querySelector('input#large-hands-color');
const secondHandsColor = document.querySelector('input#second-hand-color');
const button = document.querySelector('button');

function clock() {
  const now = new Date();
  const ctx = canvas.getContext('2d');
  //Setup Canvas
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); //Put 0,0 in the middle
  ctx.rotate(-Math.PI / 2); //Rotate clock -90deg

  //Set Default Styles
  ctx.strokeStyle = lineColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.lineCap = 'round';
  // Draw clock Face
  ctx.save();
  ctx.beginPath;
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
  // Draw hour lines

  ctx.save();
  ctx.strokeStyle = lineColor.value;
  ctx.lineWidth = 4;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  //Draw Minutes
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = lineColor.value;

  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }

  ctx.restore();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  //Draw the hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hours +
      (Math.PI / 360) * minutes +
      (Math.PI / 21600) * seconds
  );
  ctx.strokeStyle = largeHandsColor.value;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();
  //Draw the minutes hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * minutes + (Math.PI / 1800) * seconds);
  ctx.strokeStyle = largeHandsColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();
  //Draw the second  hand
  ctx.save();
  ctx.rotate((seconds * Math.PI) / 30);
  ctx.strokeStyle = secondHandsColor.value;
  ctx.fillStyle = secondHandsColor.value;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(clock);
}
requestAnimationFrame(clock);
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const dataUrl = canvas.toDataURL('img/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataUrl;
  link.click();
});
