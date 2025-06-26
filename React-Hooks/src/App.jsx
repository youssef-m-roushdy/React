import { useMemo, useState } from "react";
import "./App.css";
import { initialItems } from "./utils";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  // Every time count increases, we find the selected item this causes performance lag.
  // This is an expensive operation, especially with a large array.
  // In a real-world scenario, you would want to optimize this.
  // This causes a performance issue because it iterates through the entire array again and again every time the count changes.
  // The selected item is always the last so it causes a that performance issue becuase it should iterate to the end of the array to get the selected item.
  // This is a bad practice in React, especially with large arrays.
  // this is unessary computation that can be avoided by using a more efficient state management approach or memoization.
  // Now: how can i fix it uses useMemo
  // So the item and the selectedItem is the same, the selectedItem is always the last item in the array.
  // So we can use useMemo to memoize the selected item and avoid unnecessary computation.
  // so we can return the previos value if the items array is not changed and no need to compute it again.

  //const selectedItem = items.find((item) => item.isSelected); // old with leak performance without using useMemo

  // const selectedItem = useMemo(() =>
  //   items.find((item) => item.isSelected)
  //   ,[items] // When items is different, it will recompute the selected item value
  // );

  const selectedItem = useMemo(() =>
    items.find((item) => item.id === count) 
    ,[count, items] // A common mistake because they forget to put proper dependancies in the dependancy array, include count and items
    // Now when count changes, it will recompute the selected item value
    // and when items changes, it will recompute the selected item value
    // This is a good practice to avoid unnecessary computation and improve performance.
  );

  // its nessary to use useMemo when you have an expensive computation that you want to avoid running on every render.
  // only in this case you should use useMemo, otherwise you can just use the normal state management.

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <h1>Selected item: {selectedItem?.id}</h1>
        <button onClick={handleIncreament} className="btn-green">
          Increament +
        </button>
      </div>
    </>
  );
}

export default App;
