const buttons = document.querySelectorAll('button');
const calcDisplay = document.getElementById('calcDisplay');

let firstNumber = '';
let secondNumber = '';
let operator = '';

function updateCalcDisplay() {
  calcDisplay.textContent = firstNumber + operator + secondNumber;
}

buttons.forEach((button) => {
  button.addEventListener('click', ()=> {
    const value = button.dataset.value;

    //1 - Check if button clicked is number.  If a # & no operator yet, update 1, otherwise update 2.
    if(!isNaN(value)) {
      if(!operator){
        firstNumber += value;
      }
      else {
        secondNumber += value;
      }
    }

    //2 - If operator selected, check if 1/2/op already exist, store operate() in 1.  Reset 2.  Store new op.
    //RESOURCE: https://stackoverflow.com/questions/4728144/check-variable-equality-against-a-list-of-values
    if (['+', '-', '*', '/',].includes(value)) {
      if(operator){
        firstNumber = operate(operator,parseInt(firstNumber),parseInt(secondNumber));
        secondNumber = '';
      }
      operator = value;
    }

    //3 - If = selected & 1/2/op exist, store operate() in 1.  Reset 2. Reset op.
    if(value === '='){
      if(firstNumber && operator && secondNumber){
        firstNumber = operate(operator,parseInt(firstNumber),parseInt(secondNumber));
        secondNumber = '';
        operator = '';
      }
    }

    //4 - If clear selected, clear out 1/2/op
    if(value === 'clear'){
      firstNumber = '';
      secondNumber = '';
      operator = '';
    }

    updateCalcDisplay();

  });
});


function operate(operator, firstNumber, secondNumber){

    switch (operator) {
        case "+":
          return add(firstNumber, secondNumber);
  
        case "-":
          return subtract(firstNumber, secondNumber);

        case "*":
          return multiply(firstNumber, secondNumber);

        case "/":
          return divide(firstNumber, secondNumber);

      }

};

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
};