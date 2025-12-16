// // //reduce 
// // // const arr = [10,20,30,40];

// // //const result = reduce(callback function,initializers)

// // // const result= arr.reduce((acc,curr)=>{
// // //     console.log(acc,curr);
// // //     acc= acc+curr;
// // //     return acc;
// // // },0);//accumulator me store hota h aur curr se aata h and initial value zero h

// // //if you want to take more paramter in reduce(acc,curr,index,array)

// // // //another way to wtrite this in one line
// // // const result = arr.reduce((acc,curr)=> acc+curr,0);
// // // console.log(result);

// // //practical use 
// // let arr = ["orange","apple","grapes","orange","apple","grapes","orange","apple","grapes"]
// // //final result should be in the form of an object with how many numbvers of each in this arr


// let result = arr.reduce((acc,curr)=>{
//         if(acc.hasOwnProperty(curr))//hasown btata h as a key koi present h ya nhi 
// //         acc[curr]++;
// //     else
// //         acc[cu
// //     return acc;


// //***************sets ************ */
// //to initialise a set 
// const set1 = new Set([10,20,20,40,40,"ram","ram",[1,2,3],[1,2,3]]);
// console.log(set1);//the set will only print the unique elements
// //why did it only print the unique no and string and not the array that is same because it is defined as object and it is a build in function or constructive

// //there is a basic way of making a set
// const set2  = new Set();
// set2.add(1)
// //there are many functions related to set you can explore it further 

// //there is a has thing in set which tells yes or no whether something is present in the set or not
// //set.has(something);
// //set.clear() deletes all the things in set a
// //all these functions are coming from the prototype of the set 

// //how to convert a set into a array 
// let arr = [1,2,3,4,5];
// const sett = (arr);
// // arr = [...sett];//this is just the usual spread operator 
// // console.log(arr);


//now this time we will take the intersection of the two sets 
let set1 = new Set[1,2,3,4,4,4];
let set2 = new Set[1,11,22,0,8,6];

let set3 = new Set([...set1,...set2])//this is union of two sets
//now we will find the intersecton of two sets
const res = new Set ([...set1].filter((num)=>set2.has(num)));
console.log(res);

for(let val of res)
    console.log(val);


//********MAPS */

//it also stores value in key val pairs
// const map1 = new Map()

//it also several properties 

//other way of creating a map
const map1 = new Map([
    [4,'rohan'],
    [20,20],
    [0,'kkkk'],
    ["chutiya",1]
])
console.log(map1)