//Function ab Block Scope !

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }
  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }
}

//Function Declaration
function AddDolarSign(value) {
  return `$ ${value}`;
}

// Function Expression

const addRandSign = function (value) {
  return `R ${value}`;
};

console.log(addRandSign(150));
