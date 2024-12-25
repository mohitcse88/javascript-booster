const accountId = 12116544
let accountEmail = "mohit@google.com"
var accountPassword = "12345"
accountCity = "Motihari"
let accountState;

// accountId = 2 // Not Allowed

console.log(accountId)

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])