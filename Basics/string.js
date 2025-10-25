 // even after being  a const data type we cans till odufy the obj internal value 
 
//const obj ={
//    id: 10,
//    balance:200
//}
//
//obj.id = 11;
//console.log(obj);


let price = 80;

console.log(`price of the tomato is ${price}`);
// console.log(str1,str2,str3);

// string in js
let str1 = "Hello coder army";
let str2 = 'mein toh mast hu';
let str3 = 'Aur bhaiya kya haal chaal';
// string concatenation
console.log(str1+str2);

// to find the length of a string in js
console.log(str1.length);

// how to print "hello coder army"
console.log('"hello coder army"');
console.log("'hello coder army'");


let message = "expose rohit negi \nbhut gande insaan h";
console.log(message)
//escape character
let comment ="expose rohit negi \\nbhut gande insaan h"
console.log(comment);

let special = "vinEet"
console.log(special[0]);
console.log(special.charAt(3)); // ye third index ko print krega

// to lowecase
console.log(special.toLowerCase());
//to uppercase
console.log(special.toUpperCase());

let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder")); // pehle ye check krega ki ye substring hero string e h ya nhi fr uska starting index return krega
console.log(hero.lastIndexOf("Coder"));
//if not present 
console.log(hero.indexOf("coder"))
console.log(hero.includes("coder"))

// slice substring
// slice can take negative index also
//              012345678
let newstr = "hellodon"
console.log(newstr.slice(0,3))
console.log(newstr.substring(0,3))
console.log(newstr.slice(-6,5))

let str5 = "hello ji kaise ho ji"
console.log(str5.replace("ji","Money"));
console.log(str5.replaceAll("ji","Money"))

// array ke form me string ko split krdeta h 
let str11 = "money,honey,sunny,funny"
console.log(str11.split(","));

// trim function remove all the spaces from start and end
let s = "    hello ji          "
console.log(s.trim())

// similarly trimstart and trimend
// new way to create string
let lateststring = new String("hello Coder Army")
console.log(typeof lateststring)// it will be object type because ye heap me space leta h 


