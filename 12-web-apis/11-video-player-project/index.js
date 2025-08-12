const video = document.querySelector('video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');

const timeStamp = document.querySelector('.timestamp');
const formatTime = (totalSeconds) => {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};
const playOrPause = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
const stopPlaying = () => {
  video.pause();
  video.currentTime = 0;
};
function updateIcon() {
  if (video.paused) {
    play.innerHTML = `
        <i class="fa fa-play fa-2x"></i>
        `;
  } else {
    play.innerHTML = `
        <i class="fa fa-pause fa-2x"></i>
        `;
  }
}
const updateProgress = (e) => {
  const timePercent = (e.target.currentTime * 100) / video.duration;
  progress.value = timePercent;
  timeStamp.innerText = formatTime(Math.floor(e.target.currentTime));
};
play.addEventListener('click', playOrPause);
stop.addEventListener('click', stopPlaying);
video.addEventListener('timeupdate', updateProgress);

video.addEventListener('click', playOrPause);
video.addEventListener('keydown', (e) => {
  if (e.keyCode === 32 || e.keyCode === 179) {
    playOrPause();
  }
});
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
progress.addEventListener('input', (e) => {
  const time = (Number(e.currentTarget.value) * video.duration) / 100;
  video.pause();

  video.currentTime = time;
  timeStamp.textContent = formatTime(Math.floor(time));
});
progress.addEventListener('change', () => {
  video.play();
});
