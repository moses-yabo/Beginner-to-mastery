const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/moses-yabo/repos');

//readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data);

    data.forEach((repo) => {
      const li = document.createElement('li');
      li.innerHTML = ` <strong> ${repo.full_name}</strong>
                        <p>Descr: ${repo.description}</p>
                        <p>Language: ${repo.language}</p>
                        <p>Visibility: ${repo.visibility}</p>
                        <p>Name: ${repo.name}</p>

        `;
      document.querySelector('#results').appendChild(li);
    });
  }
};
xhr.send();
