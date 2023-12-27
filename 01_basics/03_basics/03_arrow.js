const user = {
    username: "Nitin", 
    price: 999, 

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username = "nitin"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Nitin"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Nitin"
    console.log(this);
}

// chai()

//Basic Arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// if used {} than used return compulsory
// if used () than used not compulsory
const addTwo = (num1, num2) => ({username: "nitin"})

console.log(addTwo(4, 5));


const myArray = [2, 5, 3, 6, 9]
myArray.forEach()