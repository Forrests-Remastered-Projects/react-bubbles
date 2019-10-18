import React from "react";
import { Redirect, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";

const ProtectedRoute = ({ ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <BubblePage {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
