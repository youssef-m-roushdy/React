import React from 'react'

export const Sidebar = ({user}) => {
  return (
    <>
        <div>{user.name}</div>
        <div>Subscription status: {user.isSubscribed ? "Subscribed": "Not subscribed"}</div>
    </>
  )
}


export const Profile = ({user}) => {
  return (
    <div>{user.name}</div>
  )
}

