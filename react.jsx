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

// 2c. HAT ARE PROPS IN REACT?
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

// 3. WHAT IS JSX?
// - JSX(JavaScript XML) is an extension to JS syntax that allows you to write HTML - like code within JS. JSX is not interpreted by browers directly instead it needs to be transpiled into regular JS using tools like Babel

import React from "react";

const MyComponent = () => {
  const name = " John Doe";
  const greeting = <h1>Hello, {name}!</h1>;

  return (
    <>
      {greeting}
      <p>This is a JSX example.</p>
    </>
  );
};

// 4. React lifecycle methods
// 4a - constructor(): constructor is called when a component is being initialized and is used for initializing state and binding event handlers

class MyComp extends React.Component {
  constructor(props) {
    super(pros);
    this.state = {
      count: 0,
    };
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

// 4b - componentDidMount(): this method is invoked immediately after the component has been mounted to the DOM. Used for initial setup, fetching data from the API, or starting timers

class MyComp extends React.Component {
  componentDidMount() {
    console.log("Component has been mounted");
  }

  render() {
    return <div>Component content</div>;
  }
}

// 4c - componentDidUpdate() - method is called after a component updates and re-renders. Used for side effects after a component state or props have changed
class MyComp extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps) {
      console.log("Value props has been changed");
    }
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}

// 4d - componentWillUnmount(): method called before a component is unmounted and removed from the DOM. Used for cleanups(cancelling timers and event subscriptions)
class MyComp extends React.Component {
  componentWillUnmount() {
    console.log("Component is being unmounted");
  }

  render() {
    return <div>Component content</div>;
  }
}

// 4e - render(): a method that returns the JSX markup to be rendered on the screen. Called when the component needs to be re-rendered due to changes
class MyComp extends React.Component {
  render() {
    return <div>Component content</div>;
  }
}

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

// 2. useEffect() - allows us to perfom side effects in functional components such as fetching data, subscribing to events or manipulating the DOM

import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  // useEffect accepts two arguments i.e effect function and an optional dependency array
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return <div>{data ? <p>Data: {data}</p> : <p>Loading.....</p>}</div>;
};

// 3. useContext - allows us to access the value of React context within a functional component. It allows functional components to access and use the value provided by a Context.Provider
import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
};

// 4. useReducer - managing state using a reducer function. Used to manage complex state logic
import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const Count = () => {
  // dispatch function is used to send actions to the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      // clicking the buttons dispatches the corresponding actions tp update the
      state based on the reducer logic
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

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

// WHAT IS STATE?
// - refers to the data that a component holds and manages.It represents the dynamic nature of a component and determines how it behaves and renders in response to user unteraction.
// - state allows components to store and update data internally
// - Stateless components/ functional components: these are plain JS functions. Do not have internal state management and do not use lifecycle methods. Receive data as props and use that data to render output
// - Stateful components / class components: have internal managed using the `state` object accessible via `this.state`
