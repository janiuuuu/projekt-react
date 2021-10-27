const aktualnaData = new Date();


const data = `${aktualnaData.getDate()} - ${(aktualnaData.getMonth().valueOf()+1)} - ${aktualnaData.getFullYear()}`;
const czas = `${aktualnaData.getHours()} : ${aktualnaData.getMinutes()} : ${aktualnaData.getSeconds()}`;
console.log(`aktualna data ${data} Aktulna godzina  ${czas}`);