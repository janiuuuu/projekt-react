const prompt= require('prompt');
console.log("Została wylosowana liczna");

const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(randomNumber);

prompt.get(['number'], function (err, result) {
    console.log("Została wpisana wartość :");
    console.log(`number: ${result.number}`);

    if(result.number == randomNumber ){
        console.log("Udało się.");
    }else{
        console.log("Sprobuj ponownie.")
    }
  });
