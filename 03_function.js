function square(num) {
  console.log("Given no:", num);
  var result = num * num;
  console.log("Result is:", result);
}
square(9);
square(11);
square(25);
square(1023);
console.log(
  "===================================================="
);
function multiply(n1, n2, n3) {
  console.log("Given no. are:", n1, n2, n3);
  var result = n1 * n2 * n3;
  return result;
}
var returnValue = multiply(5, 5, 5);
console.log("Multiplication is:", returnValue);
console.log("============================================");
function swap(n1,n2){
    console.log("Before Swap", "n1->", n1, " n2->", n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log("After Swap", "n1->", n1, " n2->", n2);
}
swap(100, 200);
swap("Jenny", "Menny");
