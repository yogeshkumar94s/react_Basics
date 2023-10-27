import { useState } from "react";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(0); // first method to pass a value to a state

  const [counter, setCounter] = useState(() => {
    return 0;
  }); //  Second method to pass a value, the function inside the useState runs only one time

  function increaseCounter() {
    if (counter < 18) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  function decreaseCounter() {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  }
  return (
    <>
      <div className='main'>
        <h1>Learn useState Hook</h1>
        <button onClick={increaseCounter}>+</button>
        <span>{counter}</span>
        <button onClick={decreaseCounter}>-</button>
      </div>
    </>
  );
}

export default App;
