/* eslint-disable import/extensions */

import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const operandOne = Big(numberOne);
  const operandTwo = Big(numberTwo);

  switch (operation) {
    case 'X':
      return operandOne.times(operandTwo).toString();
    case '-':
      return operandOne.minus(operandTwo).toString();
    case '+':
      return operandOne.plus(operandTwo).toString();
    case '%':
      return operandTwo.div('100').toString();
    case '÷':
      if (operandTwo === 0) return "Error: You can't divide by 0";
      return operandOne.div(operandTwo).toString();
    default:
      return 0;
  }
};

export default operate;
