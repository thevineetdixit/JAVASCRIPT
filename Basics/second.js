// comaprison operator
// number ot number 
let a1=2
let a2=2
console.log(a1<a2)

let num = 10
let str = "10"
console.log(num==str)

// type check then comapre
console.log(str===num)
 

// null = undefined // true
// NULL === UNDEFINED // false

console.log(null == undefined)
console.log(null===undefined)

console.log(null == 0) //null humesha undefined ke equal ho skta h uske alawa kisike equal nhi ho skta
console.log(null < 0)//in sab me pehle type conversion hoga 
console.log(null > 0)//in sab me pehle type conversion hoga
console.log(null <= 0)//in sab me pehle type conversion hoga
console.log(null >= 0) //in sab me pehle type conversion hoga


//undefined comaprison
console.log(undefined==0)
console.log(undefined<0)
console.log(undefined>0)
console.log(undefined<=0)
console.log(undefined>=0)

// interesting cheez
console.log(NaN==NaN) // because you dont know whether NaN1 == NaN2 for ex a != b


// tricky
let abc1 = 123;
let abc2 = "123"
let abc3 = 123
console.log(abc1==abc2==abc3)// pehle usne abc1 and abc2(true) ko comapre kiya then usne iske baad usne true ko abc3 ke saath comparekiya to true== abc3 me result false aaya result


// logical opretaor

let age = 18
let money = 420
console.log(age>=18 && money>200)

// same as  c++ language
