import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        counter {count}
      </button>
      <button onClick={() => setCount((prev) => prev + 2)}>
        counter {count}
      </button>
      {/* <button onClick={() => setCount(count + 1)}>counter {count}</button>
      <button onClick={() => setCount(count + 2)}>counter {count}</button> */}
    </div>
  );
}

export default HookCounter;
