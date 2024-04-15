const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator() {
  rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
      rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
        let result;
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        switch (operator) {
          case '+':
            result = firstNumber + secondNumber;
            break;
          case '-':
            result = firstNumber - secondNumber;
            break;
          case '*':
            result = firstNumber * secondNumber;
            break;
          case '/':
            if (secondNumber !== 0) {
              result = firstNumber / secondNumber;
            } else {
              console.log('Cannot divide by zero');
              rl.close();
              return;
            }
            break;
          default:
            console.log('Invalid operator');
            rl.close();
            return;
        }

        console.log(`The result is: ${result}`);
        rl.close();
      });
    });
  });
}

calculator();