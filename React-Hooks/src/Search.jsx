// it kind of affects useCallback
// memo is a hook that also used for performance
// its wraps the component that you try to export this case Search component and intercepts the render of the component
// and check if props are different from one render to next 
// so it will checks if the onChange prop is different from the previous render to the next render
// its going to render the component again if it isn't it going to skip rendering the component
// use it when some component you don't want to re-render them unless the props change
import { memo } from "react";

const Search = ({onChange}) => {
    console.log("Search component rendered");
  return (
    <>
      <input type="text" placeholder="search users..." onChange={(e) => onChange(e.target.value)}/>
    </>
  );
};

export default memo(Search);
