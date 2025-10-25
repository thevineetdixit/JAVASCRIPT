// //reduce
// const arr = [10,20,30,40,50];

// // format for reduce
// // const result = arr.reduce(callback function , initialisation)
// //  const result = arr.reduce((acc,curr)=>{
// //     console.log(acc,curr) //to understand  how the code is working
// //     acc = acc+curr
// //     return acc
// //  },0) 

// //  console.log(result);

//  // in short you can write in this way 
//  const result = arr.reduce((acc,curr)=>acc+curr,0)

let arr = ["orange","apple","banana","orange","apple","banana","orange","apple","grapes"]
// return krna h ki isme fruits count kitni baar aaya h har fruit 
// orange : 3;
// appple :3
// grapes ;1

const result = arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
      acc[curr]++;
   else
      acc[curr]=1;

      return acc;
},{})

console.log(result);