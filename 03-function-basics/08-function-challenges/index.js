//Challenge

const getCelcius = (f) => ((f - 32) * 5) / 9;
console.log(getCelcius(100), '\xB0C');

//Challenge 2
const minMax = (...numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(minMax(1, 2, 3, 4, 5, 6, 7, 8, 9));

//Challenge 3
((length = 10, width = 5) => {
  const area = length * width;

  console.log(
    `The area of a rectangle with a length of ${length}  and a Width of ${width} is ${area}.`
  );
})();
