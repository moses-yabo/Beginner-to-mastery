const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Lindile', age: 27 });
  }, 1000);
});

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

// getUsers();
const getPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
};
getPost();
