import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decreament, increament, increamentAsync, increamentByAmount } from "./state/counter/counterSlice";


function App() {
  // useSelector is a hook that allows you to extract data from the Redux store state.
  // It takes a function that receives the entire state and returns the part of the state you want to access.
  // In this case, we are accessing the `value` property of the `counter` slice of the state.
  // This is useful for reading the current value of the
  const count = useSelector((state) => state.counter.value);
  
  // useDispatch is a hook that returns a reference to the dispatch function from the Redux store.
  // You can use this function to dispatch actions to the store, which will trigger state updates
  // and cause components that are subscribed to the store to re-render with the new state.
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button className="btn-green" onClick={() => dispatch(increament())}>
          Increment
        </button>
        <button className="btn-red" onClick={() => dispatch(decreament())}>
          Decrement
        </button>
        <button className="btn-green" onClick={() => dispatch(increamentByAmount(10))}>
          Increment
        </button>
        <button className="btn-green" onClick={() => dispatch(increamentAsync(10))}>
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
