import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncreament = () => {
    // setCount will trigger rerender
    // but countRef will not trigger rerender
    // use it render to render the current value of the countRef in component
    // beacause useRef will not trigger rerender
    setCount(count + 1);
    // never use ref in component render it will not trigger rerender
    countRef.current++;



    //console.log("Count:", count, "Count Ref:", countRef.current)
    console.log("Count Ref:", countRef.current);
  };

  // Never use Ref in return function
  // it will not trigger rerender

  return (
    <>
      <div>
        <h1>Count: {countRef.current}</h1>
        <button onClick={handleIncreament} className="btn-green">
          Increament +
        </button>
      </div>
      
    </>
  );
}

export default App;