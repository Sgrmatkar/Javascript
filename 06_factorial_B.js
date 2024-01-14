let functionOfWordCount = function(word) {
 
    if (word === null || word === undefined || typeof word !== 'string') {
        return `# Factorial of ${word} is: Invalid Input`;
    }

    let wordlength = word.split(" ").length;
   
    if (wordlength < 0) {
        return `Invalid Input: ${word}`;
    }

    if (wordlength == 0) {
        return `Factorial of ${word} is: 1}`;
    }

    let result = 1;
    for (let index = 1; index <= wordlength; index++) {
        result = result * index;
    }
    return `# Total no. of words in given string "${word}" is ==> ${wordlength}
  Factorial of ${wordlength} is: ${result}`
    
};

let sentence1 = functionOfWordCount("Revision is the mother of Success");
console.log(sentence1);

let sentence2 = functionOfWordCount("We never fail, we always learn, Mind it");
console.log(sentence2);

let sentence3 = functionOfWordCount(null);
console.log(sentence3);

let sentence4 = functionOfWordCount("");
console.log(sentence4);

let sentence5 = functionOfWordCount("Sagar Parmeshwar Matkar");
console.log(sentence5);

