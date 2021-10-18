console.log("Została wylosowana liczna");

var randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Wpisz liczbę : ', (answer) => {
    if(answer == randomNumber ){
        console.log("Udało się.");
    }else{
        console.log("Sprobuj ponownie.")
    }
    rl.close();
  });