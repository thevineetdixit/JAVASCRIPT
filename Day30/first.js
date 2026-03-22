cart = ["pizza","coke","sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
        },3000)
    })

    return pr; // ✅ FIX
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}


//now since these all are async hence we cant use await with them in public 
// to use async we need a async funciton where inside we will do the await task 
async function greet() {
    // so to overcome this issue of call back function typical code we made the await task function
    const order = await placeOrder(cart); //order hume cart se milega
    const foodDetails = await preparingOrder(order);// food details hume perapre ke baad milengi 
    const droplocation = await pickupOrder(foodDetails)// drop location humein foodetails pass krne ke baad milegni
    deliverOrder(droplocation)//at last the order shouild be delivered by the location since it dodesnt require the other function or task to complete

}
greet();



//this was the format for the promises and callback functions type 
//but this is really tough to read and make sense since one depend on other and it doesnt look like that
// placeOrder(cart)//cart will give us the order info
// .then(order=>preparingOrder(order))// here the order will get consumed by the prepareorder then will give the food details too the next 
// .then(foodDetails=>pickupOrder(foodDetails))//here the fooddetails will be used by pickup order and then will giveout the delivery details andll
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));