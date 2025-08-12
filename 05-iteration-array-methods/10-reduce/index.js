const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);
const sum2 = numbers.reduce((acc, curr) => acc + curr, 10);
console.log(sum2);

//Using a For Loop

const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};

console.log(sum3());
const cart = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 299.99,
    quantity: 2,
    category: 'Electronics',
    sku: 'WM-1001',
  },
  {
    id: 2,
    name: 'LED Desk Lamp',
    price: 499.5,
    quantity: 1,
    category: 'Home & Office',
    sku: 'LDL-2023',
  },
  {
    id: 3,
    name: 'USB-C Charger',
    price: 199.0,
    quantity: 3,
    category: 'Accessories',
    sku: 'UC-45W',
  },
  {
    id: 4,
    name: 'Notebook (A5, 200 pages)',
    price: 89.95,
    quantity: 4,
    category: 'Stationery',
    sku: 'NB-A5-200',
  },
];
//Reduce with an array of Objects using Methods Reduce
const cartTotal = cart.reduce(
  (accumulator, current) => ({
    price: accumulator.price + current.price * current.quantity,
  }),
  { price: 1000 }
);
console.log(cartTotal.price);
//Reduce with an array of Objects using For Of
const sumForCart = function () {
  let acc = { price: 0 };
  for (const curr of cart) {
    acc.price += curr.price * curr.quantity;
  }
  return { price: acc };
};

console.log(sumForCart().price);
