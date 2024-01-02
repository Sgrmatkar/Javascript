console.log(`==============STEP-01==============`);
function squareOfWordLength(word){
    var length = word.length;
    return {length, square: length*length };
   
}
var result1 = squareOfWordLength("JavaScript");
console.log(`The given word is : JavaScript`);
console.log(`Length of string : ${result1.length}`);
console.log(`Length of Square : ${result1.square}`);
console.log(`-----------------------------`);
var result2 = squareOfWordLength("Google Chrome");
console.log(`The given word is : Google Chrome`);
console.log(`Length of string : ${result2.length}`);
console.log(`Length of Square : ${result2.square}`);
console.log(`-----------------------------`);
var result3 = squareOfWordLength("Developer Smart");
console.log(`The given word is : Developer Smart`);
console.log(`Length of string : ${result3.length}`);
console.log(`Length of Square : ${result3.square}`);
console.log(`==============STEP-02==============`);

function processString(){
    var inputString = "I am Angular Developer";
    var words = inputString.split(" ");
    var stringLengthDividedByWords = inputString.length / words.length;
    var stringLengthMulltipliedByWords = inputString.length * words.length;
    console.log(`Given String is: ${inputString}`);
    console.log(`Length of given string: ${inputString.length}`);
    console.log(`Total no. of words: ${words.length}`);
    console.log(`Division of total no. of words in string: ${stringLengthDividedByWords} `);
    console.log(`Multiplication of total no. of words in string: ${stringLengthMulltipliedByWords} `);
}
processString()