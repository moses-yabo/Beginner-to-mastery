// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);
//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         console.log(this.readyState);

//         if (this.status === 200) {
//           console.log(this.status);

//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject('something went wrong ');
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 100);
//   });
// }
async function getAllDataWithFetch() {
  const todoRes = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await todoRes.json();
  const postRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postRes.json();
  const userRes = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await userRes.json();
  console.log(todos, posts, users);
}

async function getAllPromiseAll() {
  const [todoRes, postRes, userRes] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos'),
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users'),
  ]);

  const todos = await todoRes.json();
  const posts = await postRes.json();
  const users = await userRes.json();
  console.log(users, posts, todos);
}
async function getAllPromiseAll2() {
  const [todos, posts, users] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos').then((data) =>
      data.json()
    ),
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) =>
      data.json()
    ),
    fetch('https://jsonplaceholder.typicode.com/users').then((data) =>
      data.json()
    ),
  ]);

  console.log(users, posts, todos);
}
// const getAllData = async () => {
//   try {
//     const todos = await getData('https://jsonplaceholder.typicode.com/todos');
//     console.log('TODOS !', todos);
//     const posts = await getData('https://jsonplaceholder.typicode.com/posts');
//     console.log('POSTS !', posts);
//     const users = await getData('https://jsonplaceholder.typicode.com/users');

//     console.log('USERS !', users);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getAllData();
getAllPromiseAll2();
