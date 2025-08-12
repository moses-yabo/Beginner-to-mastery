const ray = [1, 2, 3, 4, 5];
ray.push(6);
ray.unshift(0);
ray.reverse();
console.log(ray);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];
arr3.splice(arr3.indexOf(5), 1);
console.log(arr3);
