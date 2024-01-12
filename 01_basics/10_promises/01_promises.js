const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('sync task is compelete');
        resolve();
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
});
// Pronise 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})
// Pronise 3
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai and me", email: "rainitin725@gmail.com"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

// Pronise 4
const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Nitin", password: "123"})
        } else{
            reject('ERROR:Somthing went wrong')
        }
    }, 1000);
});

 PromiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// promise 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "JavaScript", password: "1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
// ****try Catch method use****
// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//         console.log("E:", error);
//    }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
