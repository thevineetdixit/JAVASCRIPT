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



//forEach loop
let arrr = [1,2,3,4,5]
arrr.forEach(function(num){
    console.log(num)
});
//output: 1 2 3 4 5
// here forEach loop takes a callback function as an argument and calls it for each element in the array
// you can also use arrow function
arrr.forEach( (num,index) => console.log(num,index ));
arrr.forEach( (num,index,nums) => nums[index] = num * 2 );// modifying original array
//output: 2 4 6 8 10


const pri = (num) => console.log(num);
arrr.forEach(pri);
//output: 2 4 6 8 10
// here pri function is passed as a callback to forEach loop

//filter 
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter( (num) => num % 2 === 0 );//no need to defien return keyword in arrow function if its a single line
console.log(evenNumbers);
//output: [2,4,6,8,10]
// here filter method takes a callback function that returns true for even numbers and creates a new array with those numbers only  


//map in javascript
