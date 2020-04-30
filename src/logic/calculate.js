/* eslint-disable consistent-return */

import operate from './operate';

const calculate = (calculator, buttonSymbol) => {
  const { total, next, operation } = calculator;

  if (buttonSymbol === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (buttonSymbol === '.') {
    if (next) {
      if (next.includes('.')) return {};
      return { total, next: `${next}.`, operation };
    }

    if (total) {
      if (total.includes('.')) return {};
      return { total: `${total}.`, next, operation };
    }
    return { total: '0.', next, operation };
  }

  if (next && buttonSymbol === '+/-') {
    return { next: next * -1 };
  }

  if (total && buttonSymbol === '+/-') {
    return { total: total * -1 };
  }

  if (buttonSymbol === '=' && next === '0' && operation === '÷') {
    return {
      error: "Error: You can't divide by 0",
    };
  }

  if (buttonSymbol === '=' && total && next && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }
};

export default calculate;
