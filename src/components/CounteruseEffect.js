import React, { useEffect, useState } from "react";

export const CounteruseEffect = () => {
  const [count, setCount] = useState(0);

  //we will useEffect hok to change the tiltle of page every time count changes

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count {count}
      </button>
    </div>
  );
};
