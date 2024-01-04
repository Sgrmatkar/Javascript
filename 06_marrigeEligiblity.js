var candidate = function isEligibleForMarrige(gender, age){
    if (gender === "Male" && age >=21) {
        console.log(`${gender},${age} =This male is eligible for marrige`);
    } else if (gender === "Male" && age <21) {
        console.log(`${gender},${age} =This male is Not eligible for marrige`);
    } else if (gender === "Female" && age >=18) {
        console.log(`${gender},${age} =This Female is eligible for marrige`);
    }else if (gender === "Female" && age <18) {
        console.log(`${gender},${age} =This Female is Not eligible for marrige`);
    } else if (gender === "Other" && age >=21) {
        console.log(`${gender},${age} =This Other is Not eligible for marrige`);
    }
    }

candidate("Male", 17);
candidate("Male", 25);
candidate("Female", 28);
candidate("Female", 16);
candidate("Other", 35);
candidate("Other", 41);