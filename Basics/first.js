// declare the varialbe
let num = 10;
console.log(num);

// you can or cant use ; semicolon at the end 

// primitive data type
// let num = number
//           String
//           boolean
//           big int
//           NULL
//           UNDEFINED
//           SYMBOL

// TYPE OF DATATYPE (typeof)
 let accountnumber = 10
 console.log(typeof accountnumber)

 let statement = true;
 console.log(typeof statement)

 let nothing
 console.group(typeof nothing)

 // null
 let bal = null
 console.log(bal);

 // big int (last me n lagana pdhta h)
 let a = 920279239829462394486724927n
 console.log(a)

 console.log(Number.MAX_SAFE_INTEGER)
 console.log(Number.MIN_SAFE_INTEGER)

 // non primitve data types
 // array objet functions


let arr =[10,20,50,"rohit","mohit"];
console.log(typeof arr)
console.log(arr)

//object(it has a ke value pairs)
let obj ={
    user_name :"rohit",
    ballance : 420,
    account_number : 43628472484
}

console.log(obj)

// funtions
// we can also store functions in a varible
let fun= function(){
    console.log("hello coder army")
    return 10;
}
// how to call fuhntions and return value kaise print krani h wo bhi 
fun();
console.log(fun())
console.log(typeof fun);

// type conversion 

let account_ballance = "500"
let numb = Number(account_ballance)
console.log(numb)

// boolean to number
let x = true;
console.log(Number(x))

// now if we try to convert a string with leeters to anumber then it will give you output as (NaN) i.e Not a Number
let number = "500xs"
console.log(Number(number))
//null case
let x1 = null
console.log(Number(x1))

// undefiined
let x2
console.log(Number(x2))

// string ke andar convert
let ab = 20;
console.log(String(ab))

// bool to string 
let a1= true
console.log(String(a1))
// check krlo uska typr
console.log(typeof String(a1))

//***********ARITHMATIC OPERATOR  */
console.log(((6*(3+18))/6)-9);

// pehle divide and multiply hoga (left -> right)
// Add Sub left to right

// ++ and --
let sum = 20
sum++
console.log(--sum)

// assignment operator
let x3=20
x3+=10
x3*=10
console.log(x3)