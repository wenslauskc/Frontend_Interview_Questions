// 7. useRef - provides a mutable value that persists across renders
import React, { useRef, useState } from "react";

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Click and Focus</button>
    </>
  );
};
