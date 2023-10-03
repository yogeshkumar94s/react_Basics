import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter from 0 to 100</h2>
      <h3>Counter value: {counter}</h3>
      <button onClick={increaseValue}>increase</button>
      <br />
      <button onClick={decreaseValue}>decrease</button>
    </>
  );
}

export default App;
