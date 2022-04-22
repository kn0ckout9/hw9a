// TODO: load the "accounting.js" module
const account = require('./accounting');

// Create object from the exported class
const myAccount = new account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());
