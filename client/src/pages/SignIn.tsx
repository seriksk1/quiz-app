import React from "react";
import { useDispatch } from "react-redux";

import { AuthForm } from "../components";
import { login } from "../redux/actions/user";
import withAuth from "../hocs/withAuth";

function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    console.log("login", data);
    dispatch(login(data));
  };

  return (
    <>
      <AuthForm name="Login" onSubmit={handleSubmit} />
    </>
  );
}

export default withAuth(SignIn);
