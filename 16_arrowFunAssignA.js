console.log(`---------------------------STEP-1---------------------------`);
const msg = () =>console.log(`Good Morning, Today is Thursday `);
msg();
console.log(`---------------------------STEP-2---------------------------`);
const mul = (n1, n2, n3=1) => n1*n2*n3;

const returnValue = mul(5, 5,2);
console.log(`Multiplication of given values is: ${returnValue}`);
const returnValue1 = mul(10,4);
console.log(`Multiplication of given values is: ${returnValue1}`);
console.log(`---------------------------STEP-3---------------------------`);
const add = (n1,n2,n3,n4,n5) => {
    return n1+n2+n3+n4+n5;
}
const add1 = add(100,100,200,349,756);
console.log(`Addition of given values is:${add1}`);

const add2 = add("I am"," learning"," ES6"," features"," in depth");
console.log(`Addition of given values is:${add2}`);
console.log(`---------------------------END---------------------------`);