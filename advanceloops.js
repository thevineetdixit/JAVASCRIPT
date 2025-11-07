let obj = {
    name : "Vineeth",
    age : 21,
    city : "Chennai",
    gender : "male",
}


//for in loop - to iterate over keys(property) of an object
for(let key in obj){
    console.log(key); //prints keys
    console.log(obj[key]); //prints values
}

//now we can also use Object.keys() method to get an array of keys and then use for of loop to iterate over them
//so now we weill learn about the diff in getting keys with for in and Object.keys()

let obj2 = Object.create({obj});
obj2.money = 420;
obj2.id = "vineet";
console.log(obj2);//prints only own properties money and id because obj is in prototype chain
//it can access the properties of obj but they are not its own properties
console.log(obj.name);//prints Vineeth
console.log(obj.city);//prints Chennai
//but its own properties are money and id
//


