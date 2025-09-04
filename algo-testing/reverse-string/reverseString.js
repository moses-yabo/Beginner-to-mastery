//Solution1
// function reverseString(string) {
//   return string.split('').reverse().join('');
// }
//Solution2
// function reverseString(string) {
//   let reversed = '';
//   for (const char of string) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }
function reverseString(string) {
  return string.split('').reduce((reversed, char) => char + reversed, '');
}
module.exports = reverseString;
