console.log(`============================STEP-1============================`);
let s1 = "I am very good IT Developer";
let vowelsCount =0;
for (let index = 0; index < s1.length; index++) {
    let char = s1.charAt(index).toLowerCase();
    if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u') {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Given string is: ${s1}`);
console.log(`Total no. of vowels count is: ${vowelsCount}`);
console.log(`============================STEP-2============================`);
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i * i * i;
}
console.log(`Sum of cubes of numbers from 1 to 5 is: ${sum}`);
console.log(`============================STEP-3============================`);
function oddPositionedChars(inputString) {
    for (let i = 0; i < inputString.length; i=i+ 2) {
        if (inputString[i] !== ' ') {
            console.log(inputString[i]);
        }
    }
}

let string1 = "Hard work always pays back";
console.log(`Given string is: ${string1}`);
oddPositionedChars(string1);

let string2 = "Soon I will be Angular IT Champ";
console.log(`Given string is: ${string2}`);
oddPositionedChars(string2);
console.log(`============================END============================`);

    

