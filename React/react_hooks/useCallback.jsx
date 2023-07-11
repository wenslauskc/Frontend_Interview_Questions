// 5. useCallback() - caches a callback function for better perfomance

import React, { useState, useCallback } from "react";

const Counting = () => {
  const [count, setCount] = useState(0);

  // useCallback prevents the `increment` and `decrement` functions from being re created and re rendered. Dependency array ensures functions are created only once during the imitial state
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
