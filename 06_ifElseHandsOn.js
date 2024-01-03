console.log("=====================STEP-01=====================");
var isEvenOrOdd = function(number){
    if (number%2 == 0){
        return "EVEN";
    } else {
        return "ODD";
    }
};
var result = isEvenOrOdd(45);
  console.log(`45 Given number is ${result}`);

  var result = isEvenOrOdd(70);
  console.log(`70 Given number is ${result}`);

  var result = isEvenOrOdd(67);
  console.log(`67 Given number is ${result}`);

  var result = isEvenOrOdd(98);
  console.log(`98 Given number is ${result}`);
  console.log("=====================STEP-02=====================");
  var isEligibleToVote = function(age){
    if ( age >= 18){
        return "Yes......person is Eligible to Vote"
    } else {
        return "Sorry......person is Not Eligible to Vote"
    }
  }
  var result = isEligibleToVote(18);
  console.log(`${result}`);

  var result = isEligibleToVote(20);
  console.log(`${result}`);

  var result = isEligibleToVote(17);
  console.log(`${result}`);

  var result = isEligibleToVote(40);
  console.log(`${result}`);
  console.log("=====================STEP-03=====================");
  var checkStringLength = function(str){
    if (str.length > 10) {
        return "Given String JavaScript - ES6 length is greater than 10"
    } else{ return "Given String JavaScript - ES6 length is lesser than 10"}
  }
  var result = checkStringLength("JavaScript - ES6");
  console.log(`${result}`);
  console.log("=====================STEP-04=====================");
  var checkStrStartsWithJava = function(str){
    if (str.startsWith("Java")) {
        return "The given string Javascript Language : Starts with Java";
     } else {
        return "The given string Javascript Language : Does Not Starts with Java";
     }
  }
  var result = checkStrStartsWithJava("JavaScript Language");
  console.log(result);
  console.log("=======================END=====================");