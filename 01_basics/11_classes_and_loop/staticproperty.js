class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const nitin = new User("nitin")
// console.log(nitin.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email =email
    }
}

const car = new Teacher("car","car@gmail.com")
// car.logMe()
console.log(car.createId());


