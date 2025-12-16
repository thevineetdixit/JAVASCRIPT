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

//pop
arr.pop();// it will remove last element from array
console.log(arr)
//push
arr.push("new element");
console.log(arr)
//shift
arr.shift();// it will remove first element from array
console.log(arr)            
//unshift
arr.unshift("first element");// it will add element at first position
console.log(arr)

//delete operation
delete arr[2];// it will delete the element but will not change the length of array
console.log(arr);
console.log(arr.length);// length will remain same
//to remove undefined element we can use filter method
let filteredArr = arr.filter((element) => element !== undefined);
console.log(filteredArr);
console.log(filteredArr.length);// length will be updated

console.log(arr.slice(1,4));// it will return a new array from index 1 to index 3 (4-1)
console
console.log(arr.splice(1,4));// it will remove elements from index 1 to index 4 (4 elements) and return the removed elements
console.log(arr);// original array will be modified

//format of splice is splice(starting index, number of elements to be removed, elements to be added)
arr.splice(1,2,"a","b","c");    // it will remove 2 elements from index 1 and add "a","b","c" at index 1
console.log(arr);

console.log(arr.toString()) // it will convert array to string
console.log(arr.join(" - ")) // it will convert array to string with specified separator

//conc
let arr2 = [6,7,8];
let arr3 = ["x","y","z"];
let concatedArr = arr.concat(arr2,arr3);
console.log(concatedArr)

arr2.push(arr3);
console.log(arr2)// it will add arr3 as a single element at the end of arr2 
arr2.pop();
arr2 = arr2.concat(arr3);
console.log(arr2)// it will add elements of arr3 to arr2        
console.log(arr2[1][1])// it will access element 'y' from arr2
//this will be 2d array now


 


