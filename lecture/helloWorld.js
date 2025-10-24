//to assign value we input node helloWorld.js into the terminal and then the name (node helloWorld.js Deja)

//in this case the data is an object given we are using dot notaion and the bracket notation is an array meaning that (process.argv[2]) should give you the THIRD object in the array.
//the number in the brackets will target what you are seeing in the array
const myName = process.argv[1];

//printing process to the console. Process is a built in object so when you rerun the node then it runs all the code and the built in object
console.log(process.argv);
//'/usr/local/bin/node' (this file path represent node)
//'/Users/dejah/Documents/dev/node-2-user-inputs/src/helloWorld.js' (where the file path that is stored locally is located)

if (myName) {
  console.log(`Greetings, ${myName}!`);
} else {
  console.log("Hello, world!");
}
