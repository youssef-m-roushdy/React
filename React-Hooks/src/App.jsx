import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function App() {

  const[user] = useState({
    isSubscribed: true,
    name: "Youssef",
  })

  return (
    <>
      <Dashboard user={user}/>
    </>
  );
}

export default App;
