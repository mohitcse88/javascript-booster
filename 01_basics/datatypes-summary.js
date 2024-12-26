// Primitive 

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Copy of Value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // Empty
let userEmail; // Value is not defined but memory space is declared 

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);
// console.log(id === anotherId);

// Given Value are same but return value are not same

const bigNumber = 465646546554665445644564656n
// Use n in the last
// console.log(typeof bigNumber);


// Reference (Non-Primitive)

// Array, Objects, Functions

// Functions return actually in funcation but call Object Functions

const heros = ["shaktiman", "Hriteek Raushan", "Sharukhan", "Ravir Alabadia"]

const user = {
    name: "Mohit Kumar",
    age: 21, 
    mobileNumber: 6200328165,
    city: "Motihari",
    state: "Bihar",
    country: "India"
}

const greet = function(){
    console.log("Hello, World!");
}


console.log(typeof user);


// https://262.ecma-international.org/5.1/#sec-11.4.3