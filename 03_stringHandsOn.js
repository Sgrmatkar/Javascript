function stringHandsOn(){
    var givenString = "     Hey you are doing good, keep it up      ";
console.log(`1. Given string is: ${givenString}`);
console.log(`2. Length of given string  is: ${givenString.length}`);
var trimString = givenString.trim();
console.log(`3. Trimmed string: ${trimString} , Trimmed length: ${trimString.length}`);
var spaceRemoved = givenString.length - trimString.length;
console.log(`4. No. of space removed: ${spaceRemoved}`);
console.log(`5. 1st and last character after trim: ${trimString[0]}, ${trimString[trimString.length-1]} ` );
var totalWords = trimString.split(" ");
console.log(`6. Total words in string is: ${totalWords.length}`);
var indexOfGood = trimString.indexOf('good');
console.log(`7. Index of word good: ${indexOfGood}`);
var substringUsingSub = trimString.substring(22);
var substringUsingSlice = trimString.slice(22);
console.log(`8. Substring using substring: ${substringUsingSub}`); 
console.log(`   Substring using slice: ${substringUsingSlice}`);
var endsWithUp = trimString.endsWith("up");
console.log(`9. String ends with "up": ${endsWithUp}`);
var startsWithHey = trimString.startsWith("Hey");
console.log(`10. String starts with "Hey": ${startsWithHey}`);
}
stringHandsOn();