
const array = ["Jenny", "Elon", "Stew", "Bill"];
console.log(`==== Before Reverse =====`);
console.log(array);
console.log(`==== After Reverse =====`);
array.reverse();
console.log(array);

const arr = ["Jenny", "Elon", "Stew", "Bill"];
console.log(`==== Before Sorting in Ascending order =====`);
console.log(arr);
console.log(`==== After  Sorting in Ascending order =====`);
arr.sort(); // By default sort in ascending order
console.log(arr);

console.log(`==== After Sorting in Descending order =====`);
arr.reverse();
console.log(arr);

// MADAM

const isPalindrome = function(word){

}
const result = isPalindrome("MADAM");
console.log(`Given Word MADAM Is Palindrome or not: ${result}`);

// ANAGRAM
// 'heart' and 'earth' are anagrams.
const str1 = 'heart'; // Sort in ascending order ==>  aehrt
const str2 = 'earth'; // Sort in ascending order ==> aehrt

const resultStr1 = str1.split("").sort().join("");
const resultStr2 = str2.split("").sort().join("");
console.log(resultStr1==resultStr2 ? true : false);