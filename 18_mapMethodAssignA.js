const arrayNumbers = [20, 11, 40 ,25, 23, 11, 9, 31, 60, 2, 19 ];
console.log("Given array is:",arrayNumbers);
console.log(`-----------------------------------STEP-1-----------------------------------`);
const arrayAdd = arrayNumbers.map( ( currentValue) => {
    return currentValue + 10;
});
console.log("After adding 10 into each element:",arrayAdd);
console.log(`-----------------------------------STEP-2-----------------------------------`);
const arrayCube = arrayNumbers.map( (currentValue) => {
    return currentValue*currentValue*currentValue;
})
console.log("Cube of each element:",arrayCube);
console.log(`-----------------------------------STEP-3-----------------------------------`);
const arrayAddIndex = arrayNumbers.map( (currentValue,index) => {
    return currentValue+index;
})
console.log("After adding index value into its corresponding element:",arrayAddIndex);
console.log(`-----------------------------------END-----------------------------------`);