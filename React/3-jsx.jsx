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
