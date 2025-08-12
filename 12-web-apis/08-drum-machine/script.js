window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelectorAll(`audio[data-key]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.forEach((el) => {
    if (el.dataset.key == e.keyCode) {
      el.currentTime = 0;
      el.play();
      key.classList.add('playing');
      setTimeout(() => {
        key.classList.remove('playing');
      }, el.duration * 100);
    }
  });
}
