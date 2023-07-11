// 3. useContext - allows us to access the value of React context within a functional component. It allows functional components to access and use the value provided by a Context.Provider
import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
};
