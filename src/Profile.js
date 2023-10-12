import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="ml-6 mt-4 text-red-600 font-semibold">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex justify-center items-center h-screen">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;