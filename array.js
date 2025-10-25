const arr = [1, 2, 3, 4, 5,"vineet",true];
console.log(arr)
arr[0] = 100; //modifying the array
arr[5] = "rohit";

console.log(arr[5])
//new way to access element 
console.log(arr.at(5))
// it can takenegatibe indexing also
console.log(arr.at(-2));
console.log(arr.at(-4));


let newarr = arr;
console.log(arr==newarr);//true because both are pointing to same address in heap memory

//if we need to create a new array with diff location and same content then we use slice method
let newarr2 = arr.slice(0);// it will create a new array with same content but diff address in heap memory
console.log(arr==newarr2);//false because both are pointing to diff address in heap memory

//second and improtant method 
let newarr3 = structuredClone(arr);// it will create a new array with same content but diff address in heap memory
console.log(arr==newarr3);//false because both are pointing to diff address in heap memory

