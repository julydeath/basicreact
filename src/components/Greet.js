// This is functional component

import React from "react";

// function Greet() {
//   return <h1>This is Greet</h1>;
// }

const Greet = ({ name, children }) => {
  return (
    <div>
      <h1>This is Functional Component</h1>
      <h1>HI, {name}</h1>
      <p>{children}</p>
    </div>
  );
};

export default Greet;
