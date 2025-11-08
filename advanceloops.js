let objx = {
    name : "Vineeth",
    age : 21,
    city : "Chennai",
    gender : "male",
}


//for in loop - to iterate over keys(property) of an object
for(let key in objx){
    console.log(key); //prints keys
    console.log(objx[key]); //prints values
}

//now we can also use Object.keys() method to get an array of keys and then use for of loop to iterate over them
//so now we weill learn about the diff in getting keys with for in and Object.keys()

let obj2 = Object.create(objx);//IF IT IS ({OBJ}) THEN OBJ WILL BE THE KEY AND IN PROTOTYPE CHAIN
obj2.id = "vineet";
console.log(obj2);//prints only own properties money and id because obj is in prototype chain
//it can access the properties of obj but they are not its own properties
console.log(objx.name);//prints Vineeth
console.log(objx.city);//prints Chennai
//but its own properties are money and id

for(let key in obj2){
    console.log(key); //prints money
}//THE FO RIN LOOP HAVE THE ACCESS TO BOTH INHERITED AND SELF PROPERTIES

let obj ={};

obj.name="Vineeth";
//key value writable enumerable configurable
console.log(Object.getOwnPropertyDescriptor(obj,'name')); 
//WRITABLE:TRUE , ENUMERABLE:TRUE , CONFIGURABLE:TRUE

//IF writable is true THEN WE CAN CHANGE THE VALUE OF THE PROPERTY
obj.name="Vineet";
console.log(obj.name);//prints Vineet

//IF ENUMERABLE IS TRUE THEN THE PROPERTY WILL BE VISIBLE IN FOR IN LOOP AND Object.keys() METHOD
for(let key in obj){
    console.log(key); //prints name
}

Object.defineProperty(obj,'name',{//you can define property using defineProperty method
    value:"rohit",
    writable:false,
    enumerable:false,
    configurable:true,
})

let bank={
    money:1000,
    name:"vineeth",
    account_number:123456,
}

Objecdt.defineProperty(bank,'account_number',{//you can define property using defineProperty method
    writable:false,
});
bank.account_number=654321;//will not change as writable is false


//what does it mean by enumerable 
Object.defineProperty(bank,'name',{
    enumerable:false,
}); 
for(let key in bank){
    console.log(key); //prints money only as name is not enumerable
}
console.log(Object.keys(bank)); //prints [ 'money', 'account_number' ] as name is not enumerable
//jis bhi ki ka ennumerable true hoga vo hi print hoga even jo inherited properties hote hain vo print nahi hote

//configurable:false means we cannot change the property descriptor of that property again



//why dont we use for in in array 
//because for in loop iterates over all enumerable properties including inherited properties
//so if someone extends the array prototype with some custom properties then those will also be iterated over
//hence it is recommended to use for of loop or traditional for loop for arrays 
//for of loop iterates over values of iterable objects like arrays, strings, maps, sets

let arr =[10,20,30,40,50];
Object.defineProperties(arr, toString,{
    enumerable:true,
});
for(let index in arr){
    console.log(index); //prints 0 1 2 3 4 toString
}

//what is defineownproerties
//it is used to define multiple properties at once
let person={};  
Object.defineProperties(person,{
    name:{
        value:"Vineeth",    
        writable:true,
        enumerable:true,
        configurable:true,
    },
    age:{
        value:21,
        writable:false,
        enumerable:true,    
        configurable:false,
    },
});
console.log(person);//prints { name: 'Vineeth', age: 21 }   
person.name="Rohit";//works as writable is true
console.log(person.name);//person.age=22; //does not work as writable is false
//console.log(person.age);//prints 21
//delete person.age; //does not work as configurable is false
//console.log(person.age);//prints 21   
for(let key in person){
    console.log(key); //prints name age as both are enumerable
}   
console.log(Object.keys(person)); //prints [ 'name', 'age' ] as both are enumerable
//thus we can define multiple properties at once using defineOwnProperties
//thus we have learned about defineProperty and defineOwnProperties 
