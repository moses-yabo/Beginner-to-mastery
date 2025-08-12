const promise = new Promise((resolve, reject) => {
  //Do some asunc task

  setTimeout(() => {
    resolve('Async task1 Complete');
  }, 1000);
});
promise.then((v) => {
  console.info(v);
});
new Promise((resolve, reject) => {
  //Do some asunc task

  setTimeout(() => {
    reject('promise2 failed');
  }, 3000);
})
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('THE PRomise has beem Resloved or has been rejected');
  });

console.log('Hello from global Scope');
