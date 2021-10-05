import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userSelector } from "../redux/selectors";

function withAuth(Component: FC) {
  const HOC = () => {
    const { isAuthorized } = useSelector(userSelector);
    return isAuthorized ? <Redirect to="/" /> : <Component />;
  };

  return HOC;
}

export default withAuth;
