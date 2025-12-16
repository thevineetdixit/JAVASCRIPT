let obj = {
    user_name : "rohit",
    accout_number : 1234567890,
    account_balance : 5000,
}
console.log(obj);
console.log(typeof obj);

console.log(obj.account_balance)

//array is an object and this is due to its implementation
//object help us create a personal array indexing and values which help us access the desired values easily


//FUNCTION
//we can store  a function inside a variable too here in js
let func = function(){
    console.log("choder army")
}

func();

//type of function is itself a function

//we can convert a valid string to number by just using Number tag
let money = "101"
console.log(Number(money))



let accno = "100cs"
console.log(Number(accno));
//ye NaN show krega kyiunki acc no valid no nhi h

let m = null;
console.log(Number(m));
//null is 0 in number conversion


let n = undefined;      
console.log(Number(n));
//undefined is NaN in number conversion
//undefined is not a valid number

let ab = 320;
console.log(String(ab));
//string conversion of a number is valid

let ax = true
console.log(String (ax));
//true is 1 in number conversion

let m2 = undefined;
console.log(typeof String(m2))


//to convert in boolean then use Boolean tag
let x = "rohit"; // lekin jab string empty hoga tab false hoga 
//agar space hoga tab true hoga
console.log(Boolean(x));
//1 is true in boolean conversion   


/* Arithmetic JavaScript Rules */

//divide and multiply left to right
//add and subtract left to right
//multiply and divide have higher precedence than add and subtract

console.log(100 + 50 * 3); // 250
console.log((100 + 50) * 3); // 450
//avoid using these code like (6*8*8+2/2) //because its hard to read
//use brackets to make it more readable





//************MODLUS*****************/
console.log(20%3);

//********* ++/ -- ******/
 

