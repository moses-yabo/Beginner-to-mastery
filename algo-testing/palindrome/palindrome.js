//solution 1
// function palindrome(word) {
//   const reversed = word
//     .split('')
//     .reduce((reversed, char) => char + reversed, '');
//   return reversed === word;
// }
function palindrome(word) {
  return word
    .split('')
    .every((char, index) => char === word[word.length - index - 1]);
}

module.exports = palindrome;
