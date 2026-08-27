// Change the format to Day Month Date Year

let date = new Date();
let dateFormat = date.toDateString();
console.log(dateFormat);

//Print the date in the format dd/mm/yyyy

let today = new Date();
let day = today.getDay();
let month = today.getMonth() + 1;
let year = today.getFullYear();

day = day < 10 ? '0' + day: day;
month = month < 10 ? '0' + month: month;  //This is called the ternary operator

const formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate);

// Example of setMonth function

let firstDate = new Date();
console.log(firstDate);
firstDate.setMonth(2);
console.log(firstDate);

console.log("--------------------------------------------------------------");

// Calculate the date 3 months prior

let dateOne = new Date;
console.log(dateOne.toDateString());
let mon = dateOne.setMonth(dateOne.getMonth() - 3);
console.log("Date 3 months prior is :" + dateOne.toDateString());

// UTC and IST conversion

// + - day and year


