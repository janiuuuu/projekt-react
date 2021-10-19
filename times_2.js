
var moment = require('moment');
moment.locale('pl');
moment().format();
console.log("aktualna data " + moment().format('Do MMMM YYYY')+ " Aktulna godzina " + moment().format('h:mm:ss'));