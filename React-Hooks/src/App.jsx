import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return { ...state,
        count: hasError 
        ? state.count 
        : newCount, 
        error: hasError 
        ? "Count cannot exceed 5" 
        : null };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return { ...state,
        count: hasError 
        ? state.count 
        : newCount, 
        error: hasError 
        ? "Count cannot be negative" 
        : null };
    }
    default:
      return state;
  }
}

function App() {
  /*
  state: is the current state of the component
  dispatch: is a function that allows you to update the state
  state
  action: is an object that describes what happened
  useReducer: is a hook that allows you to manage state in a more complex way than useState.
  It takes a reducer function and an initial state as arguments.
  The reducer function takes the current state and an action as arguments and returns a new state.
  The action is an object that describes what happened, and the reducer function updates the state based
  */
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <>
      {state.error && <h2>Error: {state.error}</h2>}
      <h1>Counter: {state.count}</h1>
      <button className="btn-green" onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button className="btn-red" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
}

export default App;
