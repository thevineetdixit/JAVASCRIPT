//for of loop

const arr = [10,20,11,18,13]

for ( let value of arr){    
    console.log(value)
}   
//output: 10 20 11 18 13
// here value is a variable that takes the value of each element in the array one by one

let str = "Hello"
for ( let char of str){
    console.log(char)
}
//output: H e l l o 
//


//dont use for of loop with objects directly as they are not iterable

//callback function
// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
function names(fun){
    console.log("hello i am name function");
    fun();      
}

function greet(){
    console.log("hello am callback function");
}
names(greet);
//output: hello i am name function
//        hello am callback function
// here greet function is passed as an argument to names function and called inside it.

//you can also pass the whole function into the function call

//use cases 
function fetchdata(){
    console.log("fetching data from server...");
}
//setInterval(fetchdata, 2000);
//output: fetching data from server...
//        fetching data from server...
//        fetching data from server...
// here fetchdata function is called every 2 seconds by setInterval function

