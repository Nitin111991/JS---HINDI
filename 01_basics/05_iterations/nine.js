const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal =myNums.reduce((acc, curr) => acc+ curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js cours",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "Data science",
        price: 12999
    },
    {
        itemName: "mobile dev course",
        price: 9099
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay);
