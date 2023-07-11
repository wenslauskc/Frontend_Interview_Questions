// 1. WHAT IS REACTJS?
// - React is a Javacsript library used to build user interfaces. It differs from other frameworks as it focuses on component-based development and uses Virtual DOM for effecient rendering

// 2. KEY FEATURES OF REACTJS
// - Compoent reusability, Virtual DOM for efficient updates, unidirectional data flow , and JSX declarative UI syntax

// 2a. WHAT IS A VIRTUAL DOM?
// - a lightweight copy or in memory represantation of the actual DOM. React uses it to perfom efficient updates by comparing and updating only necessary parts of the DOM

// 2b. WHAT IS MEANT BY UNIDIRECTIONAL DATA FLOW?
// - principle that governs how data is passed and updated in a software. Here data flows in a single direction, typical from parent component to child component. AKA "props down events up" data flow. Meanning data is passed from parent component to child comp through props and cannot be modified .If child needs to update data it does by invoking event callbacks passed to its props.
// - advantages is easy to debug, better predictability, and improved understand of state management, track data flow and ho components are connected.

import React from "react";

const ParentComponent = () => {
  // Parent component defines a variable `data`, renders the child component and passes data as a prop
  const data = "Hello from parent!";

  return (
    <>
      <h2>ParentComponent</h2>
      <ChildComponent data={data} />
    </>
  );
};

const ChildComponent = (props) => {
  // child component receives the data props through its function arguement and renders the value within a paragraph
  const { data } = props;

  return (
    <>
      <h3>Child Component</h3>
      <p>{data}</p>
    </>
  );
};
