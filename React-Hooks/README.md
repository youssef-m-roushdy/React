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

### useCallback

`useCallback:` Keep the same function to skip rerender of components that props not changed
that may cause performane issue if this component render multiple children so freez the function until the function need to unfreeze

```
const handleSearch = useCallback((searchText) => {
   function you want to freeze
}, [] -> array of dependancies that controll when function should changes);
```