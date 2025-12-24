const acountId = 144553; //value change hudina
let accountEmail;
accountEmail = "saugat@google.com"; //value change hunch
var userPassword = "67890"; //value change hunch
var userPassword = "67890";
// var userPassword = "223";

accountCity = "Kathmandu";
let accountState;
accountEmail = "saugat@gmail.com";
// accountId = 2; // not allowed
console.log(accountEmail);
accountEmail = "hc@hc.com";
userPassword = "98765";
accountCity = "Patan";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  userPassword,
  accountCity,
  accountState,
]);
//consoles [144553, hc@hc.com, 98765, 'Patan', undefined]
