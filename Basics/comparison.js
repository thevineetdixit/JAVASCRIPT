// Comparison Operators
//number to number comparison

let num = 5;
let str = "5";
console.log(num == str); //true
//js type conversion karke compare krega aur dono equal h



console.log(num === str); //false
//type conversion nhi krega ,pehle type compare krega fir value compare krega


console.log(num != str); //false
console.log(num !== str); //true        


let x = 10
let str1 = "10"
console.log(x < str1); //false
console.log(x <= str1); //true
console.log(x > str1); //false
console.log(x >= str1); //true      
//ye sab type conversion karke compare krega


console.log(null == undefined); //true
console.log(null === undefined); //false
//undefined and null are different types
//baaki null will never be equivsalent to any except == undefined


console.log(null==0)//true or false? false
console.log(null===0)//false
console.log(null!=0)//true
console.log(null!==0)//true    
console.log(null>=0)//true    
console.log(null<=0)//true
console.log(null>0)//false
console.log(null<0)//false
//null is only equal to undefined and not equal to any other value
//null is considered as 0 in >= and <= comparison


 //undefined comparisons
 console.log(undefined==0)//false
 console.log(undefined===0)//false
 console.log(undefined!=0)//true
 console.log(undefined!==0)//true
 console.log(undefined>=0)//false
 console.log(undefined<=0)//false
 console.log(undefined>0)//false
 console.log(undefined<0)//false
 //undefined is not equal to any value except null
 //undefined when comapred to any number then undefined is converted to NaN and any comparison with NaN is false

 console.log(NaN==NaN)//false
 console.log(NaN===NaN)//false
 console.log(NaN!=NaN)//true    
 console.log(NaN!==NaN)//true
 console.log(NaN>=NaN)//false
 console.log(NaN<=NaN)//false
 console.log(NaN>NaN)//false
 console.log(NaN<NaN)//false
 //NaN is not equal to any value including itself
 //any comparison with NaN is false except != and !== which is true 




 //*************************TRICKY **********************
  let abc1 = 123;
  let abc2 = "123";
  let abc3 = 123;
  console.log(abc1==abc2==abc3)//false
  //abc1==abc2 is true then true==abc3 is false
  console.log(abc1==abc3==abc2)//true  
  //abc1==abc3 is true then true==abc2 is true
  console.log(abc1===abc2===abc3)//false        
  //abc1===abc2 is false then false===abc3 is false
   

  console.log(undefined!=null)//false or true? false
  console.log(undefined!==null)//true
  //undefined and null are different types so !== is true
  //undefined and null are considered equal in != comparison so false



  //***********logical operators**********
    console.log(true && "hello")//"hello"
    console.log(false && "hello")//false
    console.log(true || "hello")//true
    console.log(false || "hello")//"hello"
    //in logical operators if first operand is sufficient to determine the result then second operand is not evaluated and first operand is returned as result
    //if first operand is not sufficient to determine the result then second operand is evaluated and returned as result


    console.log(4&&5)//5
    console.log(5&&25)//25
    //this compares the bitwise operators for the number and then gives the result of second operand
    console.log(4||5)//4
    console.log(5||25)//5
    //this compares the bitwise operators for the number and then gives the result of first operand
