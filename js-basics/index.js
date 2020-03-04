console.log('Hello World'); // statement

let name = 'Jaren';
console.log(name);

// Proper modern naming
// Use camelCase 
// case-sensitive
let firstName = "Jaren";
let secondName = "Renzo";




let interestRate = 0.3;
interestRate = 1;
console.log(interestRate) // value is changed to 1


// Constants
const pi = 3.1416; // value of constant does not change

//Primitive Types (String, Number, Boolean, undefined, null)

let name = 'Mosh' // String
let age =  25; // Number
let answer = true; // boolean - used for logic etc.
let firstName; // undefined 
let selectedColor  = null; // Null clears value of variable


//Dynamic Language  - You can create new variables at runtime, and the type of variables is determined at runtime


//Reference Types

//Object 
   // {} - object literal
let name = 'Jaren';
let age = 22;
// same function as the example above
   let person = {
    name: 'Jaren', 
    age: 30
};
// Dot Notation
person.name = 'John';
console.log (person);
console.log(person.log);

// Bracket Notation

person['name'] = 'Mary';
console.log(name);


//Arrays - is a data structure used to represent a list of items

let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
selectedColors[3] = 25;
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColor.length); // length property

//Functions - set of statements that perform a task

function greet(name){ // name here is a parameter of the greet function
    console.log('Hello' + name)
}

greet('Jaren'); // executes greet function, 'Jaren' is an argument to the greet function

// parameter name is at the time of declaration
// argument is actual value supplied for that parameter

function greet(firstName,lastName){ 
    console.log('Hello' + name)
}
greet('Jaren', 'Rodriguez');


//Types of Functions


// Calculating a value 

function square(number){
 return number * number; // returns the value
}

let number = square(2);
// or
square(2);
 
console.log(number);








