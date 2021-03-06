import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledSubmitBtn,
  StyledTitle,
} from "./style";

const StyledErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 15px 0;
  color: #f92929;
`;

type FormValues = {
  username?: string;
  email: string;
  password: string;
};

interface Props {
  name: string;
  onSubmit: any;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();

const ProfileInfoForm: FC<Props> = ({ name, onSubmit }) => {
  const defaultValues: FormValues = {
    email: "",
    username: "",
    password: "",
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const errors = methods.formState.errors;

  return (
    <>
      <StyledContainer>
        <FormProvider {...methods}>
          <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
            <StyledTitle>{name}</StyledTitle>
            <p>Email</p>
            <StyledInput
              {...methods.register("email")}
              variant="outlined"
              type="email"
              error={!!errors.email}
            />
            {errors.email && (
              <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
            )}

            <p>Username</p>
            <StyledInput
              {...methods.register("username")}
              variant="outlined"
              type="username"
              error={!!errors.username}
            />
            {errors.username && (
              <StyledErrorMessage>
                {errors.username?.message}
              </StyledErrorMessage>
            )}

            <p>Password</p>
            <StyledInput
              {...methods.register("password")}
              variant="outlined"
              type="password"
              error={!!errors.password}
            />
            {errors.password && (
              <StyledErrorMessage>
                {errors.password?.message}
              </StyledErrorMessage>
            )}

            <StyledSubmitBtn type="submit">Save</StyledSubmitBtn>
          </StyledForm>
        </FormProvider>
      </StyledContainer>
    </>
  );
};

export default ProfileInfoForm;
