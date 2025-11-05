//                                 FUNCTIONS.JS
// This file contains utility functions for various operations.

//so now we will create a function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

//another way but using arrow function
const multiplyNumbers = (a, b) => {
    return a * b;
}
//another way
const divideNumbers = (a, b) => a / b;


//now the lecture starts
//the syntax of a function is basic 
// function likho aur name then fine

function greet (){
    console.log("Hello World");
    console.log("am a pro-choder")
}
greet(); //function call
greet();
greet();

function add(a,b){
    console.log(a+b);
}

add(9,1);
add(5,6);
add(100,200);


const fun1 = function(){
    console.log("I am fun1");
    return "money";

    console.log("I am after return"); //this line will never execute
}

fun1();
console.log(fun1); //prints the function definition
console.log(fun1()); // here is the catch,it also returns undefined because there is no return statement


//Arrow Functions
const  add1 = (a,b) => {
    console.log(a+b);
}
add1(5,5);

//advantage of arrow functions
//it returns the value by default if there is only one line of code
const sub = (a,b) => a-b;
console.log(sub(10,5));

const cube =  n => n*n*n;
console.log(cube(3));

const summ = function(...numbers){
    console.log(numbers);
}

summ(1,2,3,4,5,6,7,8,9);
summ(10,20,30);
summ(100,200);
summ();

//summ() //empty array

let object1 = {
    name: "Vineet",
    age: 21,
    honey : "sweet",
}


//you can call the function with destructuring also
function fun({name,amount}){
    console.log(name,amount)
}

fun(object1); //destructuring in function parameter





