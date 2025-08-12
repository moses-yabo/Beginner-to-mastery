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
getData('./actors.json')
  .then((data) => {
    console.log('actors', data);
    return getData('./movies.json');
  })
  .then((movies) => {
    console.log('movies', movies);
    return getData('./directors.json');
  })
  .then((directors) => console.log('directors', directors))
  .catch((err) => console.log(err));
