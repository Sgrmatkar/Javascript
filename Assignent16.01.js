

const arrayNum = [11,3,4,11,4,7,3];
const extraArray = [];

for (let i = 0; i < arrayNum.length; i++) {
  if (extraArray.indexOf(arrayNum[i]) === -1) {
    extraArray.push(arrayNum[i]);
  }   
}
console.log(`-------------------------STEP-01 Remove duplicate elements-------------------------`);
console.log(`Given array is: ${arrayNum}`);
console.log(`After removing duplicate elements: ${extraArray}`);
console.log(`-------------------------STEP-02 Capitalize 1st and last alphabet-------------------------`);


const str = "How are you mate";
let result = "";

const words = str.split(" ");
for (let i = 0; i < words.length; i++) {
   const word = words[i];
    if(word.length > 1) {
        result += word[0].toUpperCase() + word.slice(1, -1) + word.slice(-1).toUpperCase();
    } else {
        result += word.toUpperCase();
    }
    if ( i < words.length - 1){
        result += " ";
    }
}
console.log(`Given string: ${str}`);
console.log(`Output string: ${result}`);
console.log(`-------------------------END-------------------------`);
