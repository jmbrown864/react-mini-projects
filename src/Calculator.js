// Calculator.js

import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    // Implement the logic to handle button clicks
    setExpression((prevExpression) => prevExpression.concat(value));
  };

  const handleCalculate = () => {
    // Implement the logic to calculate the expression
    setResult(eval(expression));
  };

  const handleClear = () => {
    // Implement the logic to clear the input and result
    setExpression('');
    setResult('');
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <div>
        <input type="text" value={expression} readOnly />
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
