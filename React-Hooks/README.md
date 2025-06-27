# React Hooks Explained

## What is Hooks:
Hooks are specail functions that allow us to use state and other React features in functional components

## Hooks:

### useState Hook:

`State: `Any data or information that can change over time and causes a re-render when it changes in a React component.

Ex:

```
const[count, setCount] = useState(0);
```

`count:` the first variable that define the state

`setCount:` the second variable is the updater function that update the state

`useState():` if you don't put state value will be `undefined`

### useEffect Hook:

`In React`, component `mounting` refers to the process where a component instance is created and inserted into the Document Object Model (DOM). Conversely, `unmounting` is the process of removing a component from the DOM and cleaning up any associated resources.

`useEffect:` A hook from react that is used perform side effects in application something happened, changeded or triggered

```
useEffect(() => {

    The code that we want to run
    // Code

    Optional return function
    // Cleanup function
    return () => {
      console.log("Component unmounted, count was:", count);
    }

}, [] -> Depenacy Array
);
```

### useMemo Hook:

`useMemo:` memoizes the value and returns the same value until any dependacies in the dependancy array changes until then
it will recompute a new value

```
const selectedItem = useMemo(() =>
  inline function something it should return a value
  ,[] -> dependacy array which controls as long as nothing in the dependancy array changes it will simply
  return the value that computed at first time
);
```

### useCallback Hook:

`useCallback:` Keep the same function to skip rerender of components that props not changed
that may cause performane issue if this component render multiple children so freez the function until the function need to unfreeze

```
const handleSearch = useCallback((searchText) => {
   function you want to freeze
}, [] -> array of dependancies that controll when function should changes);
```

### useContext Hook

`useContext:` A way to store ant kind of data and have it accessable to component no matter where they are in you application
un the tree to have access to data without need for props

First define context:
context.js:

```
export const DashboardContext = createContext(undefined);
```

second wrap the component to make data accessable within any component:

```
<DashboardContext.Provider value={user}>  
  <Dashboard/>
</DashboardContext.Provider>
```

### useRef hook:

`useRef:` used whenever you want reference a value that is not needed for rendering 

`Example-1:`

```
const countRef = useRef(0);
```

`Example-2:`

```
const inputRef = useRef(null);

useEffect(() => {
  // Focus the input element when the component mounts
  inputRef.current?.focus();
}, []);

return (
  <>
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  </>
);
```

### useReducer Hook:

`useReducer:` use to manage and update state in application follows the Redux pattern
have alot of properties of values for your state and then having a reducer function
which takes in that state object along with an action that you can define in your code
and based off the action will do something something to that state we'll make a copy of
the state to make some changes and that return the copy of the state to then overwrite and make new state

```
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
```