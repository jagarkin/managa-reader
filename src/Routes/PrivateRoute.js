import React from "react";
import { useAuth } from "../auth/AuthContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to="/register" />
          );
        }}
      ></Route>
    </>
  );
};

export default PrivateRoute;
