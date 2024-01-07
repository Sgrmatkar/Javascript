console.log(`============================STEP-1============================`);
let word = "Hard work always pays back";
let result = "";

for (let index = word.length - 1; index >= 0; index--) {
    if (word.charAt(index) !== ' ') {
        result = result + word.charAt(index);
    }
}
console.log(`Given string is: Hard work always pays back`);
console.log(`Reverse string without spaces is: ${result}`);

let w2 = "Soon I will be Angular IT Champ";
let r2 = "";

for (let index = w2.length - 1; index >= 0; index--) {
    if (w2.charAt(index) !== ' ') {
        r2 = r2 + w2.charAt(index);
    }
}
console.log(`Given string is: Soon I will be Angular IT Champs`);
console.log(`Reverse string without spaces is: ${r2}`);
console.log(`============================END============================`);