// Primitive

// 7 type : String, Number, Boolern, null, undifined,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber = 378647483674873684n


//*********** Types *********
// Refrence (Non Primitive)
// Array, Objects, Functions

const heros = ["Saktima", "Hanuman ji", "shiva ji"];
let myObj = {

    name: "Nirin",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// Type           	Result
// Undefined	-  "undefined"
// Null         -  "object" (reason)In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the typeof return value "object".
// Boolean	    -  "boolean"
// Number	    -  "number"
// BigInt	    -  "bigint"
// String	    -  "string"
// Symbol	    -  "symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	- "function"
// Any other object - "object"


//++++++++++++++++++++++++++++++++++++++++++++++++New session++++++++++++++++++++++++

// Stack - ((Primitiv) data type values used in Stack memory),    Heap - ((Non Primitiv) data type values used in Heap memory)

let myYoutubename = "Nitin malviya"
let anothername = "malviya"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="Nitin@google.com"

console.log(userOne.email);
console.log(userTwo.email);