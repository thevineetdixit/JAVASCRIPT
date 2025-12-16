// STRING IN JAVASCRIPT

 let string = "ek tareeka";
 console.log(string);

 let string2='dusra tareka';
 let string3 = `teesra tareeka`;

 console.log(string , string2, string3); 

  let price = 80;
  console.log(`price of the tomato is ${price}`);
  //use only `  ` to get the variable displayed with the string.
  console.log("price of the tomato is",price,"get it asap")

  //string concatenation
  let s1 = 'hello'
  let s2 = 'choder army'
  let s3 = "han bhai kaise ho "
  console.log(s1+s2+s3)
  //console.log(""hii"") /// error
  console.log("'hi'")//fine

  //to change the line
  console.log("kanhaiya mera chhota bhaiya,\n me balram uska bada bhaiya");
  
  //escape character
  console.log("rohit bhut bada aadmi h,\\n hiii ");

  //stl of javascr
    let fruit = "banana";
    console.log(fruit.length);//
    console.log(fruit[2]);//accessing a particular character
    console.log(fruit[fruit.length-1]);     //last character
    console.log(fruit.indexOf('nan'));//first occurence
    console.log(fruit.slice(2,5));//5 not included
    console.log(fruit.replace('ban','123'));//replaces first occurence    

    console.log(fruit.toUpperCase());//all uppercase
    console.log(fruit.toLowerCase());//all lowercase       
    console.log(fruit.trim()); //removes extra spaces
    console.log(fruit.charAt(2));//accessing a particular character
    console.log(fruit.split(''));//converts string to array of characters
    console.log(fruit.split(',')); //if multiple fruits are there

    let fruit2 = "apple, mango, banana, orange";
    let fruit3 = fruit2.split(',');//array of strings
    console.log(fruit3);//array of strings
    console.log(fruit3[2]);//accessing a particular fruit

    //string template
    let name = "rohit";
    let age = 20;
    let city = "delhi";
    let about = `my name is ${name}. my age is ${age}. i live in ${city}.`;
    console.log(about);

    // negative indexing
    let anme = "rohit";
    console.log(anme.charAt(-1)); //empty string
    console.log(anme.charAt(anme.length - 1));//t
    console.log(anme.slice(-1)); //t
    console.log(anme.slice(-3)); //hit


    //you cant use negative indexing with substring method,its only for slice method
    console.log(anme.substring(-1)); //rohit?why because it considers -1 as 0
    console.log(anme.substring(anme.length - 1));//t

    

    let sentence = "hello my name is rohit";
    console.log(sentence.charAt(-1)); //empty string
    console.log(sentence.charAt(sentence.length - 1));
    console.log(sentence.slice(-1)); //t
    console.log(sentence.slice(-3)); //hit


    //for slice method
    //the second value should be greater than the first valuein indexing
    let name1 = "rohit";
    console.log(name1.slice(1,4)); //ohi
    //for negative indexing
    console.log(name1.slice(-4,-1)); //ohi

    //repalcing content
    let st= "hello kaise ho"
    console.log(st.replace('hello','hi')); //hi kaise ho
    console.log(st.replace('kaise','kya')); //hello kya ho
    console.log(st.replace('o','a')); //replaces only first occurence //hella kaise ho
    console.log(st.replaceAll('o','a')); //replaces all occurences //hella kaise ha
    console.log(st.replaceAll('l','ji'))//hjijjo kaise ho

    let m = "honey,money,funny,sunny,runny"
    console.log(typeof(m.split(',')))//object


    
