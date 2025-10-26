// objects in js 
// some thory about objects in js
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// A property's value can be a function, in which case the property is known as a method.
// Objects are used to store keyed collections of various data and more complex entities.
// In JavaScript, nearly all objects are instances of Object, which is a standard built-in object.
// Creating an object


const obj = {
    name: "vineet",
    age : 24,
    gender: "male",
    account_no : 2334,
    "account no": 45566,
    234213: 134134,
    0: "aldskfa",
}

//you cant write any key with space in between or you can use quotes for that


console.log(obj);
console.log(typeof(obj["age"])); // to check the type of value of age property
console.log(obj[0]);// accessing property with numeric key but not with only number
//you cant acces a number key with dot notation
// console.log(obj.234213); // this will give error
console.log(obj["234213"]); // this will work   or
console.log(obj[234213]); // this will also work  because js converts number to string while accessing object properties
console.log(obj["account no"]); // accessing property with space in between using bracket notation

//another way to create object
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);
// accessing object properties
console.log(obj.name); // dot notation
console.log(obj["gender"]); // bracket notation

// adding new property to object
obj.city = "New York";  
obj["country"] = "USA";
console.log(obj);

// modifying existing property
obj.age = 25;
obj["name"] = "Vineet Kumar";
console.log(obj);       

// deleting property from object
delete obj.account_no;
delete obj["account no"];
console.log(obj);

//third method to create object using Object.create()
class People{
    constructor(na,ag,gen){
        this.name = na;
        this.age = ag;
        this.gender = gen;
    }
}

const person1 = new People("Alice",30,"female");
console.log(person1);

// iterating over object properties
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

//generate all keys 
console.log(Object.keys(obj));
//generate all values
console.log(Object.values(obj));
//generate all entries
console.log(Object.entries(obj));
// checking if property exists
console.log("name" in obj); // true
console.log(obj.hasOwnProperty("age")); // true 

//combine two objects
const obj2 = {a:1, b:2};
const obj3 = {c:3, d:4};
const combinedObj = Object.assign({}, obj2, obj3);// here the empty object is the target object
console.log(combinedObj);   

//you can combine any number of objects using Object.assign() method

//spread operator to combine objects
const spreadCombinedObj = {...{},...obj2, ...obj3};
console.log(spreadCombinedObj);
// the obj 2 will be changed if there are same keys in obj3
console.log(spreadCombinedObj);
console.log(obj2);

//list the advantages of spread operator over Object.assign()
// 1. more concise syntax
// 2. easier to read and understand
// 3. can be used in more contexts, such as function arguments and array literals
// 4. does not mutate the target object, unlike Object.assign() which can mutate the target object if it is not an empty object

//list the disadvantages of spread operator over Object.assign()
// 1. not supported in older browsers without transpilation
// 2. can be less efficient for large objects, as it creates a new object each time
// 3. does not allow for deep cloning of nested objects, whereas Object.assign() can be used in combination with other methods to achieve deep cloning  




