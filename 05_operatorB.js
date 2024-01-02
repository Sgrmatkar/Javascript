console.log(`=================STEP-01=================`);
function greaterNumber(a , b){
    console.log(`Given no. are: ${a} and ${b}`);
    var result = a>b ? `"${a}" is Greater than "${b}"` : `"${b}" is Greater than "${a}"`;
    console.log(`${result}`);
}
greaterNumber(10 , -10);
greaterNumber(800 , 899);
console.log(`=================STEP-02=================`);
function isEvenOrOddNum(num){
    console.log(`Given no. is: "${num}"`);
var result = num %2==0? ` true(Given no is "EVEN")`: `False (Given no is "ODD")`;
return result;
}
var result;
result= isEvenOrOddNum(29);
console.log(`${result}`);

result= isEvenOrOddNum(44);
console.log(`${result}`);

result= isEvenOrOddNum(0);
console.log(`${result}`);

result= isEvenOrOddNum(101);
console.log(`${result}`);
console.log(`=================STEP-03=================`);

function wordLength(str){
    var strLen= str.length;
    console.log(`Given word is ${str} and its length is ${strLen}`);
    var check = strLen%2 ==0?`EVEN`:`ODD`;
    return check;
}
var result;
result = wordLength("JavaScript")
console.log(`WOrd has ${result} length`);

result = wordLength("Devloper");
console.log(`WOrd has ${result} length`);

result = wordLength("Google");
console.log(`WOrd has ${result} length`);


