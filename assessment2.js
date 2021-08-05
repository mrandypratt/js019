// Create a method that reverses the digits in a string but keeps the
// letter characters in their current order.

// Examples:

/*

Problem:
-Reverse Digits in string, not letters

Assumptions:
-Input will always be string
-Input string will only contain letter and digit characters
-Input will contain no punctuation or whitespace

INPUT: String (containing only letters and digits)
OUTPUT: String (with digits reversed)

Data Structure:
-Str => Arr => two arrays for tracking matches => new str

Algorithm:
-Accept string as str
-Declare indexArr as empty array
-Declare digitArr as empty array
-Split str into into array of char (strArray)
-forEach in strArray char and index
  -if char is a digit
    -add index to indexArr
    -add char to digitArr
-Reverse digitArr
-iterate over indexArr
  -replace strArray[index] with digitArr[index]
-Join strArray
-Return new str

*/

function reverse(str) {
  let indexArr = [];
  let digitArr = [];
  let strArr = str.split('');
  strArr.forEach((char, index) => {
    if (char.match(/[0-9]/) !== null) {
      indexArr.push(index);
      digitArr.push(char);
    }
  });
  
  digitArr.reverse();
  
  indexArr.forEach((index, indexArrIndex) => {
    strArr[index] = digitArr[indexArrIndex];
  });
  
  return strArr.join('');
}



console.log(reverse("ab89c"));
console.log(reverse("jkl5mn923o"));
console.log(reverse("123a45"));

// console.log(reverse("ab89c") === "ab98c");
// console.log(reverse("jkl5mn923o") === "jkl3mn295o");
// console.log(reverse("123a45") === "543a21");
// The tests above should print "true".
