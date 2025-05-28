const accountId = 1443
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // Not allowed
console.log(accountId);
accountEmail = "hc@gmail,com"
accountPassword = "212121"
accountCity = "Bangluru"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
 /*
Prefer  not to use var because of issue in block scope and functional scope.
 
 
 */