const http = require('http');
const fs = require('fs');
const post = [
  {
    id: 1,
    name: 'kontey',
  },
];
const server = http.createServer((request, response) => {
  const url = request.url;
  if (url === '/') {
    fs.readFile('node-core-modules/index.html', (error, file) => {
      console.log(error, file);

      if (error) {
        response.writeHead(500, {
          'content-type': 'text/html',
        });
        response.end(`<h1> Sorry we have a problem! </h1>`);
      } else {
        response.writeHead(200, {
          'content-type': 'text/html',
        });
        response.end(file);
      }
    });
  } else if (url === '/api/posts') {
    response.writeHead(200, {
      'content-type': 'application/json',
    });
    response.end(JSON.stringify({ sucess: true, data: post }));
  } else {
    response.writeHead(404, {
      'content-type': 'text/html',
    });
    response.end(`<h1> 404 found ! </h1>`);
  }
});

server.listen(5000, () => {
  console.log(`server is listening at ${5000}`);
});
