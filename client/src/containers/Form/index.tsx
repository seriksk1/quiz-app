import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormProps } from "./interfaces";
import { FormValues } from "./types";
import { Container } from "./style";

const Form: React.FC<FormProps> = ({
  onSubmit,
  name,
  fields,
  schema,
  defaultValues,
  helperText,
  helperPath,
  View: FormView,
}) => {
  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <FormProvider {...methods}>
        <FormView
          name={name}
          fields={fields}
          methods={methods}
          onSubmit={methods.handleSubmit(onSubmit)}
          helperText={helperText}
          helperPath={helperPath}
        />
      </FormProvider>
    </Container>
  );
};

export default Form;
