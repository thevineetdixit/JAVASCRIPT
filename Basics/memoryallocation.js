//*******************memory allocation in javascript */

// In JavaScript, memory allocation is managed automatically through a process called garbage collection.
// When you create variables, objects, or arrays, memory is allocated for them on the heap.
// JavaScript uses a garbage collector to periodically check for objects that are no longer referenced and frees up the memory they occupie


let obj1 ={
    name :"vineet",
    age : 20,
}

let obj2=obj1
obj1.name= "rohit"

console.log(obj1);
console.log(obj2);
// here we can see that after updating the obj2 out obj 1 already got upadated

const num  = 10;
//num = 20;
console.log(num);
// if we give const to any primitive data type then we cant change the value it will give error 



//non primitive data type
const obj = {
    id: 10,
    balance: 200,
}

obj.id=11;
console.log(obj.id)
//in non primitive data type we can change the value whether it is const or not cause it has address in heap and it can change the values after going to
//address in stack cause it has address stored,we are not changing adress we are chagnign value in address

// tricky part
let obj0 ={
    id:45,
    ballance : 499,

}

obj= obj0;
//now this is not valid cause obj0 will give address value to the obj and it cant change its address so it will give error

