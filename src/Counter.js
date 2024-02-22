// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  // State for the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    // Implement the logic here
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    // Implement the logic here
    if (count > 0) {
        setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decrement} disabled={count > 0 ? false : true}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
