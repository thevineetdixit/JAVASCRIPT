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
}

fun1();
console.log(fun1); //prints the function definition


