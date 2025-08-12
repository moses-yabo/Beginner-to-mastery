function log(data) {
  console.log('ACTORS', data);
  getData('./movies.json', (data) => {
    console.log('MOVIES', data);
    getData('./directors.json', (data) => {
      console.log('Directors', data);
    });
  });
}
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}
getData('./actors.json', log);
