const calculator = (num1, num2, operator) => {
  let sum;
  switch (operator) {
    case '+':
      sum = num1 + num2;
      break;
    case '-':
      sum = num1 - num2;
      break;
    case '*':
      sum = num1 * num2;
      break;
    case '/':
      sum = num1 / num2;
      break;
    default:
      sum = ' Invalid Operator !';
      break;
  }
  return sum;
};
const res = calculator(5, 2, '&');

console.log(res);
