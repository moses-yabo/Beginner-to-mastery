//DEFAULT PARAMETER
function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser());

//rEST pARAMETER

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Object a params

function loginUser(user) {
  return `The User ${user.name} with the id of ${user.id} is Logged in`;
}

const user = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user));
console.log(loginUser({ id: 3, name: 'imiss her' }));

function arrParams(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log('ITEM:', item);
}

arrParams('Anthea', 'Andiswa', 'Stephen', 'wendy', 'sisipho');
