const YEAR = 2017;

console.log('Wpisany rok to ' + YEAR);

var result = false;

if(YEAR % 4 == 0 && YEAR % 100 != 0 && YEAR % 400 != 0){
    console.log("Rok przystepny");
}else{
    console.log("Rok nie przystepny");
}
