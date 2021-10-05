import React from "react";
import { useDispatch } from "react-redux";

import { AuthForm } from "../components";
import { register } from "../redux/actions/user";
import withAuth from "../hocs/withAuth";

function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    console.log("register:", data);
    dispatch(register());
  };

  return (
    <>
      <AuthForm name="Register" onSubmit={handleSubmit} />
    </>
  );
}

export default withAuth(SignUp);
