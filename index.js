const YEAR = 2017;

console.log(`Wpisany rok to ${YEAR}`);

if (YEAR % 4 == 0 && YEAR % 100 != 0 && YEAR % 400 != 0){
    console.log("Rok przystępny");
} else {
    console.log("Rok nie przystępny");
}
