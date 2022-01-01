import React from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { login } from "../redux/actions/user";
import withAuth from "../hocs/withAuth";

import { Form } from "../containers";
import { AuthForm } from "../components";

const schema = yup
  .object({
    username: yup.string().min(6).max(20).required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const defaultValues = {
  username: "",
  password: "",
};

type Field = {
  type: string;
};

const fields: Field[] = [
  {
    type: "username",
  },
  {
    type: "password",
  },
];

function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    console.log("login", data);
    dispatch(login(data));
  };

  return (
    <>
      <Form
        name="Login"
        fields={fields}
        schema={schema}
        defaultValues={defaultValues}
        helperText="Haven't registered yet?"
        helperPath="/signup"
        onSubmit={handleSubmit}
        View={AuthForm}
      />
    </>
  );
}

export default withAuth(SignIn);
