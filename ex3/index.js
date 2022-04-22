
// const moment = require("moment");
import moment from 'moment';


console.log(moment().format('dddd, MMMM Do YYYY'));
// Compute the number of years since 1976, November 26th.
let x = moment("19761126", "YYYYMMDD").fromNow();

console.log(x)