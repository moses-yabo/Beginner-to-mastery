const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('https://mock.httpstatus.io/404');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getUsers();

const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/postss');
  // const response = await fetch('https://mock.httpstatus.io/404');
  if (!response.ok) {
    throw new Error('Request failed');
  }
  const data = await response.json();
  console.log(data);
};
getPost().catch((err) => console.log(err));
