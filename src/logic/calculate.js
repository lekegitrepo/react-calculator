/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */

import operate from './operate';

const calculate = (calculator, buttonSymbol) => {
  const { total, next, operation } = calculator;
  const symbols = {
    '=': '=',
    '+/-': '+/-',
    AC: 'AC',
    '+': '+',
    '-': '-',
    X: 'X',
    '%': '%',
    '.': '.',
    '÷': '÷',
  };
  const operator = symbols[buttonSymbol];

  if (operator) {
    if (operator === 'AC') {
      return {
        total: null,
        next: null,
        operation: null,
      };
    }

    if (operator === '.') {
      if (next && next.includes(operator)) {
        return {};
      }
      if (next) {
        return {
          ...calculator,
          next: next + operator,
        };
      }
      if (total && total.includes(operator)) {
        return {};
      }
      if (total) {
        return {
          ...calculator,
          total: total + operator,
        };
      }
      if (operation) {
        return {
          ...calculator,
          next: next + operator,
        };
      }
      return {
        ...calculator,
        total: `0${operator}`,
      };
    }

    if (operator === '=') {
      if (!next || !operation) {
        return {};
      }
      if (next === '0' || total === '0') {
        if (operation === '÷') {
          return {
            total: null,
            next: null,
            operation: null,
          }
        }
        return {};
      }
      return {
        total: operate(total, next, operation),
        next: null,
        operation: null,
      };
    }

    if (operator === '%' && next !== null) {
      if (next && !isNaN(next)) {
        return { total: (operate(0, next, operator)), next: null, operation: null };
      }

      if (operation && next) {
        return {
          total: operate(total, next, operation).toString(),
          next: null,
          operation: null,
        };
      }

      if (next) {
        return {
          ...calculator,
          next: (next / 100).toString(),
        };
      }
      return {};
    }

    if (operator === '+/-') {
      if (next) {
        return {
          ...calculator,
          next: operate(-1, next, 'X'),
        };
      }
      if (total) {
        return {
          ...calculator,
          total: operate(-1, total, 'X'),
        };
      }
      return {};
    }

    if (operation) {
      if (!next) {
        return {
          ...calculator,
          operation: operator,
        };
      }
      return {
        total: operate(total, next, operation),
        next: null,
        operation: operator,
      };
    }

    if (!next) {
      return {
        ...calculator,
        operation: operator,
      };
    }
    return {
      total: next,
      next: null,
      operation: buttonSymbol,
    };
  }

  if (!next) {
    return {
      ...calculator,
      next: buttonSymbol,
    };
  }
  if (next) {
    return {
      ...calculator,
      next: next + buttonSymbol,
    };
  }

  throw Error('Error: incorrect input!');
};

export default calculate;
