import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? (
            <Redirect to="/bookmarks" />
          ) : (
            <Component {...props} />
          );
        }}
      ></Route>
    </>
  );
};

export default ProtectedRoute;
