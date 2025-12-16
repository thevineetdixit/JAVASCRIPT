//for loop
for(let i=1; i<=5; i++){
    console.log("Iteration number: " + i);
}   



//while loop
let j = 1;
while(j <= 5){
    console.log("While loop iteration: " + j);
    j++;
}


//nested loops
for(let a=1; a<=3; a++){
    for(let b=1; b<=2; b++){
        console.log("a: " + a + ", b: " + b);
    }
}



/// scope ke bare me padhte hai 
//global scope , local scope(functional scope) , block scope
// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// function testScope(){
//     let a = 100;
//     var b = 200;
//     const c = 300;  
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }       

// testScope();
// console.log(a); error a is not defined
// console.log(b); error b is not defined
// console.log(c); error c is not defined

// if(true){
//     let x = 1000;
//     var y = 2000;   
//     const z = 3000;
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }   

// console.log(x); error x is not defined
//console.log(y); // y is accessible here because var is function-scoped
// console.log(z); error z is not defined   

for(let i=1; i<=3; i++){
    console.log(i);
}
// console.log(i); error i is not defined


// console.log(c)
// var c = 5000;
//here we can access c because of hoisting but its value will be undefined until it is assigned



const obj = {
    name: "rohit",
    age: 25,
    amout:420,
    city : "kotdwara"
}

const key = Object.keys(obj)
// ['name', 'age', 'amout', 'city' ]

for(let i=0; i<key.length; i++){
    console.log("Key is: " + key[i] + " and value is: " + obj[key[i]]);
}

