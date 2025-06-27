import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./context";

function App() {

  const[user] = useState({
    isSubscribed: true,
    name: "Youssef",
  })

  return (
    <>
    <DashboardContext.Provider value={user}>
     
      <Dashboard/>
    </DashboardContext.Provider>
    </>
  );
}

export default App;
