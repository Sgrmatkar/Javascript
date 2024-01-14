let factorailOfNum = function(num) {
    if (num === 0 || num === 1) {
        return `Factorial of ${num} is: 1`;
    }
    if (num < 0){
        return `Invalid Input: ${num}`;
    }
    if (num === null || num === undefined){
        return `Invalid Input: ${num}`;
    }
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result*index; 
    }
    return `Factorial of ${num} is: ${result}`
};
let result1 = factorailOfNum(5);
console.log(result1);

let result2 = factorailOfNum(3);
console.log(result2);

let result3 = factorailOfNum(null);
console.log(result3);

let result4 = factorailOfNum(8);
console.log(result4);

let result5 = factorailOfNum(undefined);
console.log(result5);

let result6 = factorailOfNum(9);
console.log(result6);

let result7 = factorailOfNum(0);
console.log(result7);