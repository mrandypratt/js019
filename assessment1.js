// Write a function that takes a string as an argument and
// returns an array containing every third character within each
// word in the given string.

// Examples

/*

Problem:
-Take a string and convert to array with the third character of every word as elements

Assumptions:
-Words are characters separated by spaces
-All non-space characters are considered part of the word
-Input will always be a string

INPUT: String
OUTPUT: Array (Every third char of each word in string)

Data Structure:
-String => Array of Words => Filter Iteration => return

Algorithm:
-Accept string as str
-declare everyThird as empty array to store results
-Split str into words (assuming " " as delimeter)
-Iterate over each word, for each
  -Iterate over each char
   -If character is one of every third char (index + 1 % 3 === 0) add char to everyThird (concat)
-return everyThird

*/

function everyThirdChar(str) {
  let everyThird = [];
  str.split(' ').forEach(word => {
    word.split('').forEach((char, index) => {
      if ((index + 1) % 3 === 0) {
        everyThird.push(char);
      }
    })
  })
  return everyThird
}

  


