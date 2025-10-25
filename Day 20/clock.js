function timing(){
const timer = document.getElementById('root');
const now = new Date();
const indiantime = now.toLocaleTimeString();
timer.innerHTML = indiantime;
}

//// set interval har 100 milisecond me iukso call krega
setInterval(timing,(1000)); // set interval need sthe funtion which needs to be cvalled and the miliseconds 
// isko ek baar u=function ke bahar bhi rkhna odega kyunki bahar acces chahiye
const timer = document.getElementById('root');


timer.style.fontSize= "200px";
timer.style.display = "flex";
timer.style.height = "100vh"
timer.style.justifyContent="center";
timer.style.alignItems="center";

// now the main task is to run the time continuously 
