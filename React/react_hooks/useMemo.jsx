//6. useMemo() - caches a calculated value for better perfomance
import React, { useState, useCallback } from "react";

const Counted = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const doubleCount1 = useMemo(() => {
    console.log("Calculating doubleCount.....");
  }, [count1]);

  const tripleCount2 = useMemo(() => {
    console.log("Calculating tripleCount2.....");
  }, [count2]);

  return (
    <>
      <p>Double of count1: {doubleCount1}</p>
      <p>Triple of count2: {tripleCount2}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count1 + 1)}>Increment count2</button>
    </>
  );
};
