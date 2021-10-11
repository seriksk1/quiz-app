import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import * as yup from "yup";

import { StyledTitle } from "../styled-components";
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledSubmitBtn,
} from "./style";

const StyledErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 15px 0;
  color: #f92929;
`;

type AuthFormValues = {
  username?: string;
  email: string;
  password: string;
};

interface AuthFormProps {
  name: string;
  onSubmit: any;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const AuthForm: FC<AuthFormProps> = ({ name, onSubmit }) => {
  const defaultValues: AuthFormValues = {
    email: "",
    password: "",
  };

  const methods = useForm<AuthFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const errors = methods.formState.errors;

  return (
    <StyledContainer>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <StyledTitle>{name} Form</StyledTitle>

          <StyledInput
            {...methods.register("email")}
            variant="outlined"
            type="email"
            error={!!errors.email}
          />
          {errors.email && (
            <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
          )}

          <StyledInput
            {...methods.register("password")}
            variant="outlined"
            type="password"
            error={!!errors.password}
          />
          {errors.password && (
            <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>
          )}

          <StyledSubmitBtn type="submit">{name}</StyledSubmitBtn>
        </StyledForm>
      </FormProvider>
    </StyledContainer>
  );
};

export default AuthForm;
