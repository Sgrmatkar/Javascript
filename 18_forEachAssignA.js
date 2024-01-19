const arrayNumbers = [ 1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("Given array is:",arrayNumbers);

console.log(`-----------------------------------STEP-1-----------------------------------`);
arrayNumbers.forEach( (currentValue, index)=>{
    console.log(index, "===>",  currentValue);
} );

console.log(`-----------------------------------STEP-2-----------------------------------`);
console.log(`Positive numbers are:`);
arrayNumbers.forEach( (element) => {
    if (element > 0) {
        console.log(element);
    }
} );

console.log(`-----------------------------------STEP-3-----------------------------------`);

const negativeArray = arrayNumbers.filter(element => element < 0);

console.log("Negative Numbers Array:", negativeArray);

console.log(`-----------------------------------STEP-4-----------------------------------`);
console.log(`Even numbers are:`);
arrayNumbers.forEach( (element) => {
    if (element%2== 0) {
        console.log(element);
    }
} );

console.log(`-----------------------------------STEP-5-----------------------------------`);
let sum = 0;
arrayNumbers.forEach( (element)=> {
    sum = sum + element;
})
console.log(`Sum of all elements is: ${sum}`);

console.log(`-----------------------------------STEP-6-----------------------------------`);
console.log(`Even index values are:`);
arrayNumbers.forEach( (currentValue, index)=>{
    if(index%2==0)
    console.log( currentValue);
} );
console.log(`---------------------------END---------------------------`);