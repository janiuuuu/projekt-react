import { format, compareAsc } from 'date-fns'

var aktualnaData = new Date();


var data = aktualnaData.getDate() + "-" + (aktualnaData.getMonth().valueOf()+1 )+ "-" + aktualnaData.getFullYear();
var czas = aktualnaData.getHours() + ":" + aktualnaData.getMinutes() + ":" + aktualnaData.getSeconds();
console.log("aktualna data " + data + " Aktulna godzina " + czas);