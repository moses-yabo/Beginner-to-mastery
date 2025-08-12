const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const currentTime = document.querySelector('#current-time');
const volume = document.querySelector('#volum');
play.addEventListener('click', () => {
  audio.play();
});
pause.addEventListener('click', () => {
  audio.pause();
});
stop.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});
audio.addEventListener('timeupdate', () => {
  currentTime.innerText = Math.floor(audio.currentTime).toPrecision(2);
});
volume.addEventListener('change', () => {
  audio.volume = volume.value;
});
