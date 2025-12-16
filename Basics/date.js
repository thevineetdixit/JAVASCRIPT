///////            DATE IN JAVA SCRIPT            ///////
// Creating a date object
const d = new Date()
console.log(d);
// Getting the full year
console.log(d.getFullYear());
// Getting the month (0-11)
console.log(d.getMonth());

//some useful methods
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toISOString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

console.log(typeof d);
//it show time because of system clock 
console.log(d.getDate());
console.log(d.getHours());//24 hr format
console.log(d.getMinutes());
console.log(d.getSeconds());            
console.log(d.getMonth()+1); //month start from 0 so we add 1
console.log(d.getDay()); //day of week 0-6

//we need data in milliseconds
console.log(d.getTime());
//this is important
console.log(Date.now());//gives time in milliseconds from 1 jan 1970 to now


//Creating a specific date
const d1 = new Date('2020-10-25T10:20:30Z');
console.log(d1.toDateString());
console.log(d1.toLocaleString());


const now = Date.now() //gives time in milliseconds from 1 jan 1970 to now

const datenow = new Date(2020,5,20)
console.log(datenow.toString());




//setting date values
const d2 = new Date();
d2.setFullYear(2022);
d2.setMonth(11);    
console.log(d2.toString());


// COUNTDOWN TIMERS FOR OLYMPICS
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00Z");
const diff = date2 - date1; //difference in milliseconds
const diffInDays = Math.ceil(diff / (1000 * 60 * 60 * 24));// convert milliseconds to days
const days = Math.floor(diffInDays);
const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
const minutes = Math.floor(diff / (1000 * 60)) % 60;
const seconds = Math.floor(diff / 1000) % 60;
console.log(`Time left for Olympics: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);



/////////////////////////////////////////////////////////

