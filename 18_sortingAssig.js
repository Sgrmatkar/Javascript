let arrayRollNumbers = [13, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is: ${arrayRollNumbers}`);
console.log(`======================================STEP-01======================================`);
console.log(`Reverse array is:`);
console.log(arrayRollNumbers);
console.log(`======================================STEP-02======================================`);
console.log(`Sorting array with no arg.`);
let arrayRollNumbers1 = [13, 45, 56, 11, 32, 45, 109, 799, 56, 45];
arrayRollNumbers1.sort();
console.log(arrayRollNumbers1);

console.log(`======================================STEP-03======================================`);
console.log(`Sorting array in ascending order`);
let arrayRollNumbers2 = [13, 45, 56, 11, 32, 45, 109, 799, 56, 45];
arrayRollNumbers2.sort(function(a,b){
    return a-b;
});
console.log(arrayRollNumbers2);

console.log(`======================================STEP-04======================================`);
console.log(`Greatest number from array is:`);;
console.log(arrayRollNumbers2[arrayRollNumbers2.length -1]);

console.log(`======================================STEP-05======================================`);
console.log(`Smallest number from array is:`);;
console.log(arrayRollNumbers2[0]);
console.log(`======================================STEP-06======================================`);


let arrayRollNumbers3 = [13, 45, 56, 11, 32, 45, 109, 799, 56, 45];
const extraArray = [];

for (let i = 0; i < arrayRollNumbers3.length; i++) {
  if (extraArray.indexOf(arrayRollNumbers3[i]) === -1) {
    extraArray.push(arrayRollNumbers3[i]);
  }   
}
console.log(`Given array is: [${arrayRollNumbers3}]`);
console.log(`After removing duplicate elements: [${extraArray}]`);
console.log(`======================================END======================================`);