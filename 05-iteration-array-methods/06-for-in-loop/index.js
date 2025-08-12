const colourObj = {
  color1: 'red',
  color2: 'black',
  color3: 'green',
  color4: 'yellow',
};
for (const key in colourObj) {
  console.log(key, ':', colourObj[key]);
}

const colourArr = ['red', 'green', 'blue', 'yellow'];
for (const key in colourArr) {
  console.log(colourArr[key]);
}
