let num1=231; // the memory will be alloted in the stack memory
let num2 = new Number(231); // type is object and memory alo=lotred in the heap 
let num3 = new Number(231);

console.log(num1==num2);
console.log(num2==num3) // this is false because it get alloted in heap and their different address get stored in stack hence their addresses are different 

let num = 231.68;
console.log(num.toFixed(1)); // point ke baad aap kitne digit chahte h 
console.log(num.toFixed(3))

console.log(num.toPrecision(4)) // total kitne number chahiye 
console.log(num.toPrecision(8))
console.log(num.toPrecision(2))

console.log(num.toExponential(3))
console.log(typeof num.toString())

//Maths
console.log(Math.E) // Eulers value
console.log(Math.LN10)

// floor ceil
let num22 = 23.2
console.log(Math.floor(num22))
console.log(Math.random()*10)

console.log(Math.ceil(num22))

//min=40, max=50
//console.log(Math.floor(Math.random()*(max-min+1)+min));

