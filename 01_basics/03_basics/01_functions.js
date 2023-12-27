
function sayMyName(){ console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//    console.log( number1 + number2);
// }

function addTwoNumbers(number1, number2){

//   let result = number1 + number2
//   return result
   return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMassage(username = "somi"){
   if(!username){
      console.log("PLeaase enter a username");
      return
   }
   return `${username} just logged in`
}

// console.log(loginUserMassage("Nitin"));
console.log(loginUserMassage("Nitin"));
// console.log(loginUserMassage(""));// user name difinend nahi kiya jay to message print karta he ( just logged in)
// console.log(loginUserMassage()); // Valuse declear nahi karne par Undifine user leta he (undefined just logged in)

function calculateCartPrice(val1, valu2,...num1){ //  (...)rest Operater use 
   return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
   username: "Nitin",
   prices: 199
}

function handObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handObject(user)
handObject({
   username: "somi",
   price:349
})

const myNewArray = [200, 400, 100, 600]

function  returnSecondValue(grtArray){
   return grtArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));