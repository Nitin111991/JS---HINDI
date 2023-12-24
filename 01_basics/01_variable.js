const accountId = 144553
let accountEmail ="rainitin725@gmail.com"
var accountPassword ="12345"
accountCity = "Bhopal"

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "Hosangabad"
console.log(accountId);
let accountState;
/*
prefer not to use var
because of issue in block scope and function scope
*/


console.table([accountId, accountEmail,accountPassword,accountCity, accountState])
