import { use, useCallback, useState } from "react";
import "./App.css";
import Search from "./Search";

let allUsers = [
  "Youssef",
  "Ahmed",
  "Mohamed",
  "Ali",
  "Sara",
  "Fatma",
  "Hassan",
];

function App() {
  const [users, setUsers] = useState(allUsers);

  // before using useCallback
  // the log in the Search component will be printed every time the App component re-renders
  // even if the Search component is not changed
  // this cause when shuffle button is clicked, the Search component will re-render
  // and function just like have a dynamic id and every time the App component re-renders
  // this function will be created again with new id and log will be printed
  // beacause even if the fuction created the same if you compare the two functions
  // prev function = newCreated same function will be false
  // so if you it will make an issue in case it renders a expensive or conpenent with alot of children
  // const handleSearch = (searchText) => {
  //   const text = searchText.toLowerCase();
  //   const filteredUsers = allUsers.filter((user) =>
  //     user.toLowerCase().includes(text)
  //   );
  //   setUsers(filteredUsers);
  // } // before using useCallback


  // using useCallback: what it does it will wrap the function and return the same function memory address
  // as long as the dependancy array is not changed
  // so if you pass an empty array it will return the same function memory address
  // so the Search component will not re-render unless the function changes
  // controls when the function should different
  const handleSearch = useCallback((searchText) => {
    console.log(users[0]); // issue with this line
    // it will always log the first user in the users array
    // because the users state is not updated yet when the function is called
    // this is because the function is created with the initial state of users
    // put users in the dependancy array
    // so the function will be recreated when the users state changes
    const text = searchText.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      user.toLowerCase().includes(text)
    );
    setUsers(filteredUsers);
  }, [users]); // using useCallback

  const shuffle = (array) => {

    return () => {
      const shuffledArray = [...array].sort(() => Math.random() - 0.5);
      setUsers(shuffledArray);
    };
  };

 
  return (
    <>
      <div className="tutorial">
        <div className="container">
          <button className="btn-green" onClick={shuffle(allUsers)}>Shuffle</button>
          <Search onChange={handleSearch}/>
        </div>

      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
