const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("Given Array is",fruits_seasonal);
console.log(`====================================STEP-1====================================`);
const elementAtS =fruits_seasonal[0];
const elementAtE = fruits_seasonal[fruits_seasonal.length - 1];
console.log(`First element: ${elementAtS}     Last element: ${elementAtE}`);
console.log(`====================================STEP-2====================================`);
const fruits_seasonal1 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal1}`);
fruits_seasonal1.unshift("Papaya");
console.log(`After adding Papaya: ${fruits_seasonal1}`);

console.log(`====================================STEP-3====================================`);
const fruits_seasonal2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal2}`);
fruits_seasonal2.splice(3,1);
console.log(`After Removing Mango: ${fruits_seasonal2}`);
console.log(`====================================STEP-4====================================`);
const fruits_seasonal3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal3}`);
fruits_seasonal3.pop("Pineapple");
console.log(`After adding Pineapple: ${fruits_seasonal3}`);

console.log(`====================================STEP-5====================================`);
const fruits_seasonal4 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal4}`);
fruits_seasonal4.splice(4,0,"Dragon fruit");
console.log(`After adding Dragon fruit: ${fruits_seasonal4}`);

console.log(`====================================STEP-6====================================`);
const fruits_seasonal5 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal5}`);
fruits_seasonal5.splice(1,1,"Kiwi");
console.log(`After adding Kiwi: ${fruits_seasonal5}`);

console.log(`====================================STEP-7====================================`);
const fruits_seasonal6 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal6}`);
fruits_seasonal6.splice(1);
console.log(`Show elements from index 1- 4: ${fruits_seasonal6}`);

console.log(`====================================STEP-8====================================`);
const fruits_seasonal7 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given string: ${fruits_seasonal7}`);
fruits_seasonal7.slice(fruits_seasonal7.length - 3);
console.log(`Show last 3 elements: ${fruits_seasonal7.slice(fruits_seasonal7.length - 3)}`);

console.log(`====================================END====================================`);



