import React from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";

import { register } from "../redux/actions/user";
import withAuth from "../hocs/withAuth";

import { Form } from "../containers";
import { AuthForm } from "../components";

const schema = yup
  .object({
    email: yup.string().email().required(),
    username: yup.string().min(6).max(20).required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const defaultValues = {
  email: "",
  username: "",
  password: "",
};

type Field = {
  type: string;
};

const fields: Field[] = [
  {
    type: "email",
  },
  {
    type: "username",
  },
  {
    type: "password",
  },
];

function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    console.log("register:", data);
    dispatch(register(data));
  };

  return (
    <>
      <Form
        name="Register"
        fields={fields}
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        helperText="Already have an account?"
        helperPath="/signin"
        View={AuthForm}
      />
    </>
  );
}

export default withAuth(SignUp);
