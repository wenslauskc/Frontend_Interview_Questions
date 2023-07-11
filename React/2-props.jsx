// 2c. WHAT ARE PROPS IN REACT?
// - In React props(properties) are mechanism for passing data from a parent component to a child component. Components render and behave based on data received. Props are read-only and immutable to the component that receives them. Props can be strings,numbers, objects, arrays or even functions

import React from "react";

const ParentComp = () => {
  // Parent component defines a variable `name and age`, renders the child component and passes name and age as props
  const name = "John Doe";
  const age = 30;

  return (
    <>
      <h2>ParentComponent</h2>
      <ChildComp name={name} age={age} />
    </>
  );
};

const ChildComp = (props) => {
  // child component receives the name and age props through its function arguement and renders the value within a paragraph and a heading
  const { name, age } = props;

  return (
    <>
      <h3>Name: {name}</h3>
      <p>Age : {age}</p>
    </>
  );
};
