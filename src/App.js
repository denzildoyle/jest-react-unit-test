import React, { useState } from "react";

function App(){
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter((prevCounter) => prevCounter + 1);
  };

  function decrementCounter(){
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <button data-testid="increment" onClick={incrementCounter}>+</button>
      <p data-testid="counter">{counter}</p>
      <button data-testid="decrement" onClick={decrementCounter}>-</button>
    </div>
  );
};

export default App;