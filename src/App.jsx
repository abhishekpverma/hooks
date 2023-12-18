import React, { useState } from "react";

function App() {
  const [initialValue, setValue] = useState(5);

  const handleClick = () => {
    setValue(initialValue + 1);
  };

  return (
    <div>
      <h1>Increasing the number {initialValue}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
