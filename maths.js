let num1 = 234;
let num2 = new Number(234); // this will create an object
//this will be stored in heap memory 
let num3 = new Number(234);
console.log(num1== num2)// true
console.log(num2==num3);// false
console.log(num1==num3)


//the reason why num1 == num2 is that when there is a comaprison of two diff data types then we convert to same data type and then compare
//the reason for num2==num3 is false becuase they arew of same data type but they have diff addresses stored in heap memory so they are not equal

let num = 231.78
console.log(num.toFixed(1));// thsi refers to round off to 1 decimal place
let x = 231.92;
console.log(x.toFixed(1));// this will round off to 231.9
console.log(x.toFixed(2));// this will round off to 231.92
console.log(x.toFixed(3));// this will round off to 231.920
console.log(num.toPrecision(2));// this will round off to 232

console.log(Math.E)
console.log((Math.LN10));

//math random
console.log(Math.random())// this will generate value between 0 to 1

//generate random no from 0 to 9;
console.log(Math.floor(Math.random()*10));

//generate random no from 1 to 10
console.log(Math.floor(Math.random()*10)+1);

//generate random no from 20 to 30
console.log(Math.floor(Math.random()*10)+21)

//generate random no from 50 to 100
console.log(Math.floor(Math.random()*10)+51)


//min =40,max =50;
//  thsi is the direct formula to find the no in range       
// 0console.log(Math.floor(Math.random()*(max-min+11)+min))

//0-10
console.log(Math.floor(Math.random()*(10-0+1)+0))


// agr koi bhi no generate krna h mtlb 0-10 krega pehle then uske baad usko min se shift krega
console.log(Math.floor(Math.random()*(40-30+1)+30)); //pehle 0-10 ka no h then usko 30 se shift krdiya 

//ludo 
console.log(Math.floor(Math.random()*(6-1+1)+1));
// this will generate no from 1 to 6

//be cautious it is not used for generating OTP or password because it is based on our clock speed or our system performance
//for secure random no we use crypto module
//crypto module is used in node js
//in browser we use window.crypto.getRandomValues() 





