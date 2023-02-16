import React from "react";

function FunctionClick() {
  const handleClick = () => {
    console.log("you clicked");
  };

  return (
    <div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}

export default FunctionClick;
