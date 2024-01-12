class Bank{
    constructor(bankName,location,ifsCode,branchCode){
        this.bankName = bankName,
        this.location = location,
        this.ifsCode = ifsCode,
        this.branchCode = branchCode
    }
    getDetails(){
        console.log(`Bank Details is...`);
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, IFSC Code: ${this.ifsCode}, Branch Code: ${this.branchCode}`);
    }
}
console.log(`-----------------------------------STEP-1,2-----------------------------------`);
const yesBank = new Bank("YES Bank", "Mumbai", "YESB000000", "12345");
yesBank.getDetails();

const sbiBank = new Bank("SBI Bank", "Pune", "SBIN000000", "09603");
sbiBank.getDetails();
const mahaBank = new Bank("Bank of Maharashtra", "Jalna", "MAHA00000", "98765");
mahaBank.getDetails();
const axisBank = new Bank("Axis Bank", "Goa", "AXIS000000", "56789")
axisBank.getDetails();

console.log(`-----------------------------------STEP-3,4,5-----------------------------------`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`Opening time of SBI Bank is:${sbiBank.openTime} and Closing time is:${sbiBank.closeTime}`);


console.log(`-----------------------------------STEP-6-----------------------------------`);
console.log(`Bank Name is= ${axisBank.bankName} and its closing time is= ${axisBank.closeTime}`);


console.log(`-----------------------------------STEP-7-----------------------------------`);

console.log(`Bank Name is= ${yesBank.bankName}, its Branch Code is= ${yesBank.branchCode}, and its Opening time is= ${yesBank.openTime}`);