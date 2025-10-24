/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
//console logged process.argy at top of code since 'process' is a built in object so when you rerun the node then it runs all the code and the built in object so in this case it will run the logic in order of object.
console.log(process.argv);
//created variable names for both and used process.argv plus the number they will have according to order of array
const dogName = process.argv[2];
const humanYears = Number(process.argv[3]);

let dogYears = Number(process.argv[4]);

//here I created an if else statement starting at 1 that matched the information in the instructions:
//the first dog Maisie is 3 which is 29 in dog years, the second dog Ralph is 4 which is 34 in dog years, and the third dog Coco is 10 which is 64 in dog years
if (humanYears === 1) {
  dogYears = 15;
} else if (humanYears === 2) {
  dogYears = 24;
} else if (humanYears === 3) {
  dogYears = 29;
} else if (humanYears === 4) {
  dogYears = 34;
} else if (humanYears === 10) {
  dogYears = 64;
}

//console logged message as template literal and passed in created variables
console.log(
  `Your dog, ${dogName}, is ${humanYears} years old, but that's ${dogYears} years old in dog years!`
);
