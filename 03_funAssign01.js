console.log("====================Step 1====================");

function greet() {
  console.log("Hello my Name is Sagar");
}
greet();
function printMessage() {
  console.log("Lets learn JS together.");
}
printMessage();
console.log("====================Step 2====================");
function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name: ", firstName);
  console.log("Last Name: ", lastName);
  console.log("College Name: ", collegeName);
}
personalDetails("Sagar", "Matkar", "MMIT");
console.log("====================Step 3====================");
function swapValues(v1, v2) {
  console.log("Before Swap value: ");
  console.log("Value1 -->", v1);
  console.log("Value2 -->", v2);
  let temp = v1;
  v1 = v2;
  v2 = temp;

  console.log("After Swap value:");
  console.log("Value1 -->", v1);
  console.log("Value2 -->", v2);
}
swapValues("Virat", "Anushka");
console.log("----------------");
swapValues(1000, 2000);
console.log("====================Step 4====================");
function addThreeValues(value1, value2, value3) {
  console.log("Value1:", value1);
  console.log("Value2:", value2);
  console.log("Value3:", value3);
  var result = value1 + value2 + value3;
  console.log("Sum of the three values:", result);
}

addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
