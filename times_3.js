//const { format } = require('date-fns');
var format = require('date-fns/format');
console.log("Aktualna data " + format(new Date(), 'dd-MM-yyyy') + " Aktulna godzina " + format(new Date(), 'kk:mm:ss'));