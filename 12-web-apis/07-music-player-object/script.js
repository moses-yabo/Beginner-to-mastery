const musicContainer = document.querySelector('#music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelectorAll('#audio');
const progress = document.querySelector('#progress');
const progressContainer = document.querySelector('#progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

const songs = ['hey', 'summer', 'ukulele'];

// song index

function getIndex(index) {
  if (index < 0) {
    return songs.length - 1;
  } else if (index > songs.length - 1) {
    return 0;
  }
  return index;
}
let index = 0;

//initallly load song details

loadSong(songs[index]);
function loadSong(song) {
  title.innerText = song;
  audio[index].src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio[index].play();
}
function prevSong() {
  audio[index].pause();
  audio[index].currentTime = 0;
  index = getIndex(index - 1);

  title.innerText = songs[index];
  audio[index].src = `music/${songs[index]}.mp3`;
  cover.src = `images/${songs[index]}.jpg`;
  audio[index].play();
}
function nextSong() {
  audio[index].pause();
  audio[index].currentTime = 0;
  index = getIndex(index + 1);

  title.innerText = songs[index];
  audio[index].src = `music/${songs[index]}.mp3`;
  cover.src = `images/${songs[index]}.jpg`;
  audio[index].play();
}
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio[index].duration;
  audio[index].currentTime = (clickX / width) * duration;
}
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  audio[index].pause();
}
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

audio[index].addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
