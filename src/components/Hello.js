import React from "react";

const Hello = () => {
  //With JSX

  //   return (
  //     <div className="dummyclass">
  //       <h1>Hello manoj</h1>
  //     </div>
  //   );

  // without JSX

  return React.createElement(
    "div",
    { id: "1", className: "dummyClass" },
    React.createElement("h1", null, "Hello manoj")
  );
};

export default Hello;
