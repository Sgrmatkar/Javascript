function maleMarriageEligibility(gender, age, boyName){
    var result = (gender === "Male" && age >= 21) ? `Hey ${boyName}, you are eligible for Marriage`:`Unfortunately ${boyName}, you are not eligiable for marriage, please try nexttime`;
    console.log(result);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
maleMarriageEligibility("Male", 17, "Stew Jobs");

function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender === "Female" && age >= 18) ? `Hey ${girlName}, you are eligible for Marriage`:`Unfortunately ${girlName}, you are not eligiable for marriage, please try nexttime`;
    console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Melinda Gates");