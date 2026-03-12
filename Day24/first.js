const form = document.querySelector('form');

//INPUT SE JAISE I KUCHH BHI DAALOGE WAISE HI CONSOLE ME AAYEGA 
// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

//CHANGE EVENT ME JAIE HI FOCUS BAHAR JAYEGA 
// form.addEventListener('change', (event)=>{
//         console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick', (event)=>{
//     // console.log(event.target.value);
//     console.log("double click")
// })

// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("form Reset");
// })

form.addEventListener('submit',(event)=>{

    event.preventDefault();
   
    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    // const third = document.getElementById("third");
    // console.log(third.value);

    //
    //YE FORMDATA FORM KA SARA DATA DE DETA H YE EK API H 
    const data = new FormData(form);
    
    for(let [key,value] of data.entries())
        console.log(key, value);

    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

    // keys values



    // const result = document.getElementById('result');
    // result.innerText = `${first.value} ${second.value} is a good Boy`;

    // document.body.append(result);



})
