const button = document.querySelector('button');


//ab ye button ke upar isliye laga hua h kyunki bottom pr click krte hi mujhe dono ka sum chahiye 
button.addEventListener('click', ()=>{
    // Read the data
    const input1 = document.getElementById('first');//id lo fisrt no ki 
    const number1 = Number(input1.value);//input string hota h but usko convert krdege apan no me

    const input2 = document.getElementById('second');//id of second id
    const number2 = Number(input2.value);//convert inpout string to the no 

    if(isNaN(number1)||isNaN(number2))
        return;//ijf not anyone then return nothing 

    // Output the result

    const result = number1+number2;
    const re = document.getElementById('result');//result me update krdo actaul ans ko 
    re.textContent = "Result: "+result;//add the result to the div
})


// BMI Calculator
// Dhaej Calculator(Male)
// Alimony Calculator(Female)