// REACT HOOKS - functions that allow us to use state and other React features in functional components

// 1. useState() - used to add state to functional components

import React, { useSate } from "react";

const Counter = () => {
  // count represent the state value and setCount is the function that updates the state
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>Count</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
