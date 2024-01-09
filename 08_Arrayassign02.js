const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`------------------------------STEP-1------------------------------`);
console.log(`Given array is: ${arrayNumbers}`);
console.log(`Total no. of elements in array is: ${arrayNumbers.length}`);
console.log(`------------------------------STEP-2------------------------------`);
console.log(`First element in array is:${arrayNumbers[0]}         Last element in array is:${arrayNumbers[arrayNumbers.length - 1]}  `);
console.log(`------------------------------STEP-3------------------------------`);
console.log(`Third last element of array is:${arrayNumbers[arrayNumbers.length - 3]}`);
console.log(`------------------------------STEP-4------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(element);
    }
}
console.log(`------------------------------STEP-5------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==1) {
        console.log(element);
    }
}
console.log(`------------------------------STEP-6------------------------------`);
var sum = 0;
for (const index in arrayNumbers) {
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
        sum = sum + element
    }
}console.log(`Sum of elements at even index is: ${sum}`);
console.log(`------------------------------STEP-7------------------------------`);
var sum = 0;
for (const index in arrayNumbers) {
    if (index%2==1) {
        const element = arrayNumbers[index];
        console.log(element);
        sum = sum+element
    }
}console.log(`Sum of elements at odd index is: ${sum}`);
console.log(`------------------------------STEP-8------------------------------`);
var sum = 0;
for (const index in arrayNumbers) {
    sum = sum + arrayNumbers[index]; 
}
console.log(`Sum of all elements in array is:${sum}`);
console.log(`------------------------------STEP-9------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(element);
    }
}
console.log(`------------------------------STEP-10------------------------------`);
console.log(`Is no. 115 available in array: ${arrayNumbers.includes(115)}`);
console.log(`------------------------------STEP-11------------------------------`);
console.log(`Is no. 23 available in array: ${arrayNumbers.includes(23)}`);
console.log(`------------------------------STEP-12------------------------------`);
arrayNumbers.splice(3,0,66);
arrayNumbers.splice(3,0,55);
console.log(`After inserting no. 55,66 at index 3: ${arrayNumbers}`);
console.log(`------------------------------STEP-13------------------------------`);
arrayNumbers.splice(4,3);
console.log(`After deleting 3 elements from index 4: ${arrayNumbers}`);
console.log(`------------------------------END------------------------------`);
