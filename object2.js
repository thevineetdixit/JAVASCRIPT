// diff between shallow and deep copy
const original = {
    name: "Alice",
    age: 30,    
    address: {
        city: "Wonderland",
        zip: "12345"
    }   
};

// Shallow copy using Object.assign
const shallowCopy = original;    
shallowCopy.address.city = "New City";
console.log("After modifying shallow copy:");
console.log("Original address city:", original.address.city); // Output: New City
console.log("Shallow copy address city:", shallowCopy.address.city); // Output: New City    
//in shallow copy original object is also affected because both original and shallowCopy share the same reference for the nested address object

// Deep copy using structuredClone
const deepCopy = structuredClone(original);
deepCopy.address.city = "Old City";
console.log("\nAfter modifying deep copy:");
console.log("Original address city:", original.address.city); // Output: New City
console.log("Deep copy address city:", deepCopy.address.city); // Output: Old City
//in deep copy original object is not affected because deepCopy has its own separate copy of the nested address object  



const user = {
    name : "vineet",
    balance : 5000,
    address : {
        pincode : 110096,
        city : "Delhi"
    }
}

console.log(user.address);

const user2 = Object.assign({}, user); //shallow copy
user2.address.city = "Noida";

console.log("After modifying user2's city:");
console.log("user address city:", user.address.city); // Output: Noida
user2.name = "Aman";
console.log("user name:", user.name); // Output: vineet
console.log("user2 name:", user2.name); // Output: Aman
//user's address is affected because user and user2 share the same reference for the nested address object
//while the nested values of the user remained unaffected because they are primitive values

//freeze the user object
Object.freeze(user);
//it prevents any modifications to the user object

//seal
Object.seal(user2);
//it prevents adding or removing properties from user2 object but allows modifying existing properties



//destructuring of an objects
let obj = {
    name : "vineet",
    age : 24,
    money : 6000,
    honey : "sweet"
}

const {name, age} = obj; //destructuring
console.log(name, age); //vineet 24
//name and age variables are created and assigned the corresponding values from obj

const {name : username, money : income} = obj; //destructuring with renaming
console.log(username, income); //vineet 6000
//variables username and income are created and assigned the values of name and money from obj respectively

const {honey, ...rest} = obj; //rest operator
console.log(honey); //sweet
console.log(rest); //{ name: 'vineet', age: 24, money: 6000 }
//honey variable gets the value of honey property from obj
//rest variable is an object that contains all remaining properties of obj except honey




//Prototype inheritance
const animal = {
    eats : true,
    walk() {
        console.log("Animal walks");
    }
}
const rabbit = {
    jumps : true,
    __proto__ : animal //setting prototype
};      

console.log(rabbit.eats); //true
rabbit.walk(); //Animal walks
//rabbit inherits properties and methods from animal prototype

//you can access prototype properties directly
const arrr = [1, 2, 3];
console.log(arr.__proto__); //Array prototype object
console.log(arr.__proto__ === Array.prototype); //true


//diff data structure has diff prototype fixed methods
//we can acess those methods via prototype chain
const str = "hello";
console.log(str.__proto__); //String prototype object
console.log(str.__proto__ === String.prototype); //true

//example of prototype chain
const vehicle = {
    hasEngine : true,
    start() {
        console.log("Vehicle started");
    }
};
const car = {
    wheels : 4,
    __proto__ : vehicle //car inherits from vehicle
};

console.log(car.hasEngine); //true
car.start(); //Vehicle started
//car can access properties and methods of vehicle via prototype chain  


let arr = [10, 20, 30];
console.log(arr.__proto__); //Array prototype object
console.log(arr.__proto__.__proto__ == Array.prototype); //true
console.log(arr.__proto__.__proto__.__proto__ == Object.prototype); //true
console.log(arr.__proto__.__proto__.__proto__.__proto__); //null
//prototype chain ends with null


