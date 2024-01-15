// let myName = "Nitin     "
// let mychannel = "chai    "

// console.log(myName.truelength);


let myHeros = ["hanuman", "thore"]


let heroPower = {
    hunuman: "gada",
    thore: "humer",

    getThorePower: function(){
        console.log(`Thore power is ${this.thore}`);
    }
}

Object.prototype.nitin = function(){
    console.log(`niin is present in all objects`);
}

Array.prototype.heyNitin = function(){
    console.log(`Nitin say hello`);
}

// heroPower.nitin()
// myHeros.nitin()
// myHeros.heyNitin()
// heroPower.heyNitin()

// ****inheritance****
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Techer = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Techer.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Techer)

let anotherUsername = "chaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"nitin".trueLength()
"iceTea".trueLength()
