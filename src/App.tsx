import * as React from "react";

export const App = () => {
  const handleClick = () => {
    console.log("CLICK");
  };

  return (
    <div id="app">
      <h1>Typescript App Component</h1>
      <h3>Enzyme and Jest</h3>
      <button onClick={handleClick}>CHECK</button>
    </div>
  );
};
