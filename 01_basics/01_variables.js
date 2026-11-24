const accountId = "983208"
let accountEmail = "abcd@gmail.com"
var accountPassword = "12345"

accountCity = "Kolkata"

accountEmail = "abcdef@gmail.com"
accountPassword = "67890"
accountCity = "Kushmandi"



/*
Prefer not use var 
Because of issue in block scope & functional scope.
*/
// console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity]);

