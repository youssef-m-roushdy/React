import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let x = 0;

  const handleIncreament = () => {
    setCount(count + 1);
  };
  
  // The following code is incorrect because it tries to update the state multiple times in a loop
  // within the same synchronous execution context. React's state updates are asynchronous,
  // and calling setCount multiple times in a loop like this will not work as expected.
  // Instead, you should use a functional update or a loop with setTimeout to ensure that
  // each update is processed correctly.
  // const handleLoopIncreament = () => {
  //   // Instead, you should use a loop with setTimeout or use a functional update.
  //   for(let i = 0; i <= 5; i++) {
  //     setCount(count + 1);
  //   }
  // };

  const handleLoopIncreament = () => {
      for(let i = 1; i <= 5; i++) {
        setCount(prev => prev + 1);
      }
    };

  const handledecrement = () => {
    setCount(count - 1);
  };

  // Using a regular variable for x, not state
  // This means changes to x won't trigger a re-render
  // and will not be reflected in the UI automatically.
  // This is just for demonstration purposes.
  // In a real application, you would typically use state for such values.
  // If you want to see changes in the UI, you should use useState for x
  // like this: const [x, setX] = useState(0);

  const handleIncreamentX = () => {
    x = x + 1;
    console.log("X incremented to:", x);
  };

  const handledecrementX = () => {
    x = x - 1;
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncreament} className="btn-green">
          Increament +
        </button>
        <button onClick={handleLoopIncreament} className="btn-green">
          Increament +
        </button>
        <button onClick={handledecrement} className="btn-red">
          decrement -
        </button>
      </div>
    
      <div>
        <h1>X: {x}</h1>
        <button onClick={handleIncreamentX} className="btn-green">
          Increament +
        </button>
        <button onClick={handledecrementX} className="btn-red">
          decrement -
        </button>
      </div>
    </>
  );
}

export default App;
