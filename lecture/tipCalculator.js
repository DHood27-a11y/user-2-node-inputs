// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

console.log(process.argv);

//for bill we want to get the value from the array so in the terminal we write: node tipCalculator.js 11 15 5
//because process.argv automatically gives strings we want to make those into whole numbers so we use Number(process.argv[])
let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

//we want to calculate 3 values: tip amount, total bill, and total for EACH guest

//calculating tip amount
let tipAmount = bill * tipPercentage;
console.log(tipAmount);

// calculate the total bill
let totalBill = bill + tipAmount;
console.log(totalBill);

//calculate total for each
let amountOwed = totalBill / numGuests;
console.log(amountOwed);

//These are considered ABSOLUTE file paths: '/usr/local/bin/node', '/Users/dejah/Documents/dev/node-2-user-inputs/src/tipCalculator.js'
//A relative file path would look like '../helloWorld.js or './' 2 dots means parent folder and one dot means current folder
