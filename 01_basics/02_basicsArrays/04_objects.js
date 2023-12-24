// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Amita"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nitin",
            lastname: "malviya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 ={obj1, obj2}
// const obj3 =Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [

    {
     
    },
    {
       
    },
    {
       
    },

]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// D-Stactureing Objects..........
const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// const {courseInstructor} = course
const {courseInstructor: instructor} = course // dstuctoring me {} ke ander shot karkar write kiya jata he

// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "nitin",
//     "coursename": "Js in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]