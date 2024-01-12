class Vehicle{
    constructor(company ,name, type , capacity, colour ){
        this.comapny = company;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.colour = colour;
    }
    
    getDetails(){
       console.log(`Vehicle company is: ${this.comapny}, Vehicle Name is: ${this.name}, Vehicle type is: ${this.type}, Vehicle capacity is: ${this.capacity}, Vehicle colour is: ${this.colour}`);
    }
  
}
const vehicle1 = new Vehicle("Maruti Suzuki", "Ertiga", "MUV", 7, "White");

const vehicle2 = new Vehicle("Toyota", "Fortuner", "SUV", 8, "Black");

const vehicle3 = new Vehicle("Mahindra", "XUV 700", "SUV", 8, "Blue");

const vehicle4 = new Vehicle("Tata", "Nexon", "SUV", 7, "Black");

const vehicle5 = new Vehicle("Ford", "Endeavour", "SUV", 8, "Black");
console.log(`-----------------------------------STEP-1-----------------------------------`);
console.log(`Traversing array of Vehicles...`);
const arrayVehicles = [ vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];
for (const element of arrayVehicles) {
    element.getDetails();
}

console.log(`-----------------------------------STEP-2-----------------------------------`);
function College    (name, branch, location, courseDuration) {

    this.name = name;
    this.branch = branch;
    this.location = location;
    this.courseDuration = courseDuration;
    this.display = function(){
        console.log(`College Name is:${this.name}, College branch is:${this.branch}, College located at:${this.location}, College course duration is:${this.courseDuration}  `);
    }
}
const col1 = new College("APS", "SSC", "Kirkee", "1");
col1.display()
const col2 = new College("MMCC", "HSC", "Deccan", "2");
col2.display()
const col3 = new College("MMIT", "Engineering", "Lohegaon", "4");
col3.display()
const col4 = new College("Symbiosis", "MBA", "Viman Nagar", "2");
col4.display()


console.log(`-----------------------------------STEP-3-----------------------------------`);

let traverseObject = function(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'function') {
            const element = obj[key];
            console.log(`Key => ${key}; Value => ${element}`);
        }
    }
    console.log("");
}

traverseObject(col1);
traverseObject(col2);
traverseObject(col3);
traverseObject(col4);

