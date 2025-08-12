const jokeButton = document.querySelector('#joke-btn');
const joke = document.querySelector('#joke');

function getChuckNorisJokes() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        joke.textContent = data.value;
      } else {
        joke.textContent = 'Something Went Wrong 😒!';
      }
    }
  };
  xhr.send();
}

jokeButton.addEventListener('click', getChuckNorisJokes);
document.addEventListener('DOMContentLoaded', getChuckNorisJokes);
