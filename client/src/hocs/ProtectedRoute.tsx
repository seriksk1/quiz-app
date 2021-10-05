import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/selectors";

const ProtectedRoute = ({ component: Component, ...props }: any) => {
  const { isAuthorized } = useSelector(userSelector);
  return isAuthorized ? (
    <Route {...props} component={Component} />
  ) : (
    <Redirect to="/signin" />
  );
};

export default ProtectedRoute;
