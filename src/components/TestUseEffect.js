import React, { useState, useEffect } from "react";

function TestUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Update Title</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default TestUseEffect;
