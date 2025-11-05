//if else 
    let age = 20;
    if (age < 18) {
        console.log("You are a minor.");
    } else {
        console.log("You are an adult.");
    }

//if else if else
    let score = 85;
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else {
        console.log("Grade: C or below");
    }

//nested if else
    let num = 15;       
    if (num > 0) {
        if (num % 2 === 0) {
            console.log("The number is positive and even.");
        } else {
            console.log("The number is positive and odd.");
        }   
    } else {
        console.log("The number is not positive.");
    }   


    //switch case
    let day = 3;
    switch (day) {
        case 1:
            console.log("Monday");  
            break;
        case 2:
            console.log("Tuesday"); 
            break;
        case 3:
            console.log("Wednesday"); 
            break;  
        case 4:
            console.log("Thursday"); 
            break;  
        case 5: 
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday"); 
            break;
        case 7:
            console.log("Sunday"); 
            break;      
        default:
            console.log("Invalid day");
    }

    