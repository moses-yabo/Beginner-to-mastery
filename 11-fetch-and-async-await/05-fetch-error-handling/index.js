fetch('https://mock.httpstatus.io/404', {
  headers: {
    'Access-Control-Allow-Origin': '**',
  },
})
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.error(error);
  });
