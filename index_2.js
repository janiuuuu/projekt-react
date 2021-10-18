console.log("Została wylosowana liczna");

var randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(randomNumber)


var prompt= require('prompt');

prompt.get(['number'], function (err, result) {
    console.log('Została wpisana wartość :');
    console.log('number: ' + result.number);

    if(result.number == randomNumber ){
        console.log("Udało się.");
    }else{
        console.log("Sprobuj ponownie.")
    }
  });
