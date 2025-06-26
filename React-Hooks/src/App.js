import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    // The code i want to run when the component mounts
    // The code inside this function will run once when the component mounts
    console.log("Component mounted, count is:", count);
    // optionally, you can return a cleanup function
    // whenever something in dependency array changes or the component unmounts
    // this function will run
    // cleanining up resources, like event listeners, timers, etc.
    // rerunnig with the new value of count
    return () => {
      console.log("Component unmounted, count was:", count);
    }
  }, [count]) // dependency array

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handledecrement = () => {
    setCount(count - 1);
  };

  
  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncreament} className="btn-green">
          Increament +
        </button>
        <button onClick={handledecrement} className="btn-red">
          decrement -
        </button>
      </div>
    </>
  );
}

export default App;
