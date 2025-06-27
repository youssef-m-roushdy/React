import React from "react";
import { Profile, Sidebar } from "./Component";

const Dashboard = ({ user }) => {
  return (
    <>
      <Sidebar user={user}/>
      <Profile user={user} />
    </>
  );
};

export default Dashboard;
