import React from "react";
import { Link } from "react-router-dom";
import { UseFormReturn } from "react-hook-form";
import { Field as FieldType } from "../../containers/Form/types";

import { StyledTitle } from "../styled-components";
import {
  Field,
  Form,
  SubmitButton,
  ErrorMessage,
  FieldItem,
  HelperLink,
} from "./style";

interface Props {
  name: string;
  fields: FieldType[];
  methods: UseFormReturn;
  helperPath: string;
  helperText: string;
  onSubmit: () => void;
}

const RegisterForm: React.FC<Props> = ({
  name,
  methods,
  fields,
  helperText,
  helperPath,
  onSubmit,
}) => {
  const errors = methods.formState.errors;

  const renderField = (field: FieldType) => {
    const fieldName = field.type;
    const labelText = fieldName[0].toUpperCase() + fieldName.slice(1);
    const error = errors[fieldName];

    return (
      <FieldItem key={fieldName}>
        <Field
          {...methods.register(fieldName)}
          type={fieldName}
          label={labelText}
          variant="outlined"
          error={Boolean(error)}
        />
        {error && <ErrorMessage>{error?.message}</ErrorMessage>}
      </FieldItem>
    );
  };

  return (
    <Form onSubmit={methods.handleSubmit(onSubmit)}>
      <StyledTitle>{name} Form</StyledTitle>

      {fields.map((field) => {
        return renderField(field);
      })}

      <HelperLink to={helperPath}>{helperText}</HelperLink>

      <SubmitButton type="submit">OK</SubmitButton>
    </Form>
  );
};

export default RegisterForm;
