const bankSbi = {
    bankName: "State Bank of India",
    branchCode: "SBIN0009063",
    branchManagerName: "Mr. Suraj",
    bankStaff: 10,
  };
  
  const bankLocation = {
    street: "BEG",
    city: "Kirkee",
    pin: "411003"
  };
  
  console.log(`--------------------------------------------------STEP-1--------------------------------------------------`);
  console.log("Given bankSbi object is:", bankSbi);
  console.log(`--------------------------------------------------STEP-2--------------------------------------------------`);
  console.log("Given bankLocation object is:", bankLocation);
  console.log(`--------------------------------------------------STEP-3--------------------------------------------------`);
  const bankInfo = Object.assign({},bankSbi)
  const bankInfo2 = Object.assign({},bankLocation)
  console.log(`After cloning bankSbi and bankLocation:`);
  console.log(bankInfo, "\n", bankInfo2);
  
  console.log(`--------------------------------------------------STEP-4--------------------------------------------------`);
  const rateOfInterest = {
    homeLoanInterest:5.5,
    personalLoanInterest:8.5,
    dueInterest:7.5,
  }
  console.log("Given rateOfInterest object is:" ,rateOfInterest);
  console.log(`--------------------------------------------------STEP-5--------------------------------------------------`);
  const bankMerge = Object.assign({},bankInfo,bankInfo2,rateOfInterest);
  console.log(`Complete bank details are:`);
  console.table(JSON.stringify(bankMerge));
  console.log(`--------------------------------------------------STEP-6--------------------------------------------------`);
for (const key in bankMerge) {
    if (Object.hasOwnProperty.call(bankMerge, key)) {
        const element = bankMerge[key];
        console.log(key,"=>" ,element);
    }
}