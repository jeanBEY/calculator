let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNumber, secondNumber){

    switch (operator) {
        case "+":
          add(firstNumber, secondNumber);
          break;
        case "-":
          subtract(firstNumber, secondNumber);
          break;
        case "*":
          multiply(firstNumber, secondNumber);
          break;
        case "/":
          divide(firstNumber, secondNumber);
          break;
      }

};

function add(firstNumber, secondNumber){
    let answer = firstNumber + secondNumber;
    return answer;
};

function subtract(firstNumber, secondNumber){
    let answer = firstNumber - secondNumber;
    return answer;
};

function multiply(firstNumber, secondNumber){
    let answer = firstNumber * secondNumber;
    return answer;
};

function divide(firstNumber, secondNumber){
    let answer = firstNumber / secondNumber;
    return answer;
};