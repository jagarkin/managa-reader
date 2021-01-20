import React from "react";
import { useAuth } from "../../auth/AuthContext";

const Bookmarks = () => {
  const { signOut, currentUser } = useAuth();

  return (
    <>
      <h1>hhh</h1>
      <h1>hhh</h1>
      <h1>{currentUser.uid}</h1>
      <button onClick={signOut}>log out</button>
    </>
  );
};

export default Bookmarks;
