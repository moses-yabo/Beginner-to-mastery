const video = document.querySelector('video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const current_time = document.querySelector('#current-time');
console.log(play);

play.addEventListener('click', () => {
  video.play();
});
pause.addEventListener('click', () => video.pause());
stop.addEventListener('click', () => {
  video.pause();
  if (video.paused) {
    video.currentTime = 0;
  }
});
video.addEventListener('timeupdate', () => {
  current_time.innerText = video.currentTime;
});
