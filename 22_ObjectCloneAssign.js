const arrayNums = [20, 3, 4, 56, 90, 400, 49 ];
console.log(`======================================STEP-01======================================`);
const clonearrayNums = [...arrayNums];
clonearrayNums.push(55,66)
console.log(`Original array is: ${arrayNums}`);
console.log(`Cloned array is: ${clonearrayNums}`);
console.log(`======================================STEP-02======================================`);
const arrayNums1 = [20, 3, 4, 56, 90, 400, 49];

const clonedArrayNums = [...arrayNums];

const index90 = arrayNums.indexOf(90);

clonedArrayNums.splice(index90, 0, 10, 25);

arrayNums.splice(index90, 0, 10, 25);

console.log("Original Array:", arrayNums1);

console.log("Cloned Array:", clonedArrayNums);
console.log(`======================================STEP-03======================================`);
const arrayEven = [2, 30, 14, 8]
const arrayNums2 = [20, 3, 4, 56, 90, 400, 49];
const mergedArray = [...arrayNums2, ...arrayEven]

console.log(`Original array is: ${arrayNums2}`);
console.log(`Given other array is: ${arrayEven}`);
console.log(`Merged array is: ${mergedArray}`);
console.log(`======================================STEP-04,05======================================`);
const employee_info = {
    emp_id: 27,
    emp_name: "JohnDoe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "56,0000INR",
    },
    address: {
        location: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
    },
    mobile: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
const addressArray = [
    employee_info.address.location.colony,
    employee_info.address.location.street,
    employee_info.address.city,
    employee_info.address.state,
    employee_info.address.country
];

const mobileArray = [...employee_info.mobile];

console.log("Employee Address is:", ...addressArray);
console.log("Employee Mobile Numbers is:", ...mobileArray);
console.log(`======================================STEP-06======================================`);
const cloned_employee_info = JSON.parse(JSON.stringify(employee_info));

cloned_employee_info.salary.july_month = "80,0000INR";

employee_info.address.country = "United Kingdom";
console.log(`Update july_month= 80,0000INR`);
console.log(`Update country= United Kingdom`);
console.log(`Original Object:`);
console.log(JSON.stringify(employee_info));
console.log(`Cloned Object:`);
console.log(JSON.stringify(cloned_employee_info));

console.log(`======================================End======================================`);