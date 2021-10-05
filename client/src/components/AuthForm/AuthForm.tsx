import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { StyledTitle } from "../styled-components";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledSubmitBtn,
} from "./style";

type AuthFormValues = {
  username?: string;
  email: string;
  password: string;
};

interface AuthFormProps {
  name: string;
  onSubmit: any;
}

const AuthForm: FC<AuthFormProps> = ({ name, onSubmit }) => {
  const defaultValues: AuthFormValues = {
    email: "",
    password: "",
  };

  const methods = useForm<AuthFormValues>({
    defaultValues,
  });

  return (
    <StyledContainer>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <StyledTitle>{name} Form</StyledTitle>
          <StyledInput
            {...methods.register("email")}
            variant="outlined"
            type="email"
          />
          <StyledInput
            {...methods.register("password")}
            variant="outlined"
            type="password"
          />
          <StyledSubmitBtn type="submit">{name}</StyledSubmitBtn>
        </StyledForm>
      </FormProvider>
    </StyledContainer>
  );
};

export default AuthForm;
