let professor = {
    profName: "Col.Ranjeet.Sinha",
    age: 60,
    city: "Pune",
    street: "Lohagaon",
    pin: 411047,
    isMarried: true,
    degree: {
        engineering: "CSS",
        phd: "Adv Computing"
    },
    certifications: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
};
professor.totalExperience = "14 years";
console.log(`--------------------------------------STEP-1,2--------------------------------------`);
console.log(professor);
console.log(`--------------------------------------STEP-3--------------------------------------`);
console.log(`Adding certificates array in obj.: ${professor.certifications}`);
console.log(`--------------------------------------STEP-4--------------------------------------`);
console.log(`After adding new property totalExperience: ${professor.totalExperience}`);
console.log(`--------------------------------------STEP-5--------------------------------------`);
professor.street= "Dighi";
console.log(`After updating street: ${professor.street}`);
console.log(`--------------------------------------STEP-6--------------------------------------`);
professor.certifications.splice(2,0,"Oracle Certified");
console.log(`After adding "Oracle Certified" at index 2: ${professor.certifications}`);
console.log(`--------------------------------------STEP-7--------------------------------------`);
console.log(`Last element of array is: ${professor.certifications[professor.certifications.length - 1]}`);
console.log(`--------------------------------------STEP-8--------------------------------------`);
for (const key in professor) {
    if (Object.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}
console.log(`--------------------------------------STEP-9--------------------------------------`);
console.log(`Traverse array certificates`);
for (const certifications of professor.certifications) {
    console.log(certifications);
}
console.log(`--------------------------------------END--------------------------------------`);