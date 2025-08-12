try {
  double('fjdejfd');
} catch (error) {
  console.log('Error:', error);
}

function double(params) {
  if (isNaN(params)) {
    throw new Error(params + ' is not a number');
  }
  return params * 2;
}

async function getUsers() {
  try {
    const response = await fetch('https://mock.httpstatus.io/404');
    if (!response.ok) {
      throw new Error('Request has Failed');
    }
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getUsers();
