import React, { FC } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/selectors";

function withAuthShow(Component: FC) {
  const HOC = () => {
    const { isAuthorized } = useSelector(userSelector);
    return isAuthorized ? <Component /> : null;
  };

  return HOC;
}

export default withAuthShow;
