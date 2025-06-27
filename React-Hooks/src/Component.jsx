import React from "react";
import { useUserContext } from "./context";

export const Sidebar = () => {
  const user = useUserContext();
  
  return (
    <>
      <div>{user?.name}</div>
      <div>
        Subscription status:{" "}
        {user?.isSubscribed ? "Subscribed" : "Not subscribed"}
      </div>
    </>
  );
};

export const Profile = () => {
  const user = useUserContext();

  return <div>{user?.name}</div>;
};
