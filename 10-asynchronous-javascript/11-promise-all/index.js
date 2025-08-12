function getData(endpoint) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (!this.status === 200) {
          reject('Could not get data of ', endpoint);
        }
        resolve(JSON.parse(this.responseText));
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const actors = getData('./actors.json');
const directors = getData('./directors.json');
const movies = getData('./movies.json');
const all = Promise.all([actors, directors, movies]);
all
  .then((data) => {
    console.log(...data.flat());
  })
  .catch((err) => console.log(err));
