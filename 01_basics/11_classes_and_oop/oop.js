const user = {
    username: "Nitin",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username =username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log('welcome ${this.username}');
    }

    return this
}

// const userOne = User("Nitin", 12 , true)
// const userTwo = User("Malviya", 11, false);
const userOne = new User("Nitin", 12 , true)
const userTwo = new User("Malviya", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);