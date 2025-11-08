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






