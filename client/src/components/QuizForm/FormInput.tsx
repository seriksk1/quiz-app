import React, { FC } from "react";
import { FieldHookConfig, useField } from "formik";

// import { TextField } from "@material-ui/core";
import { StyledAnswerInput } from "./style";

type FormInputProps = FieldHookConfig<string> & {
  selected?: boolean;
  maxRows?: number;
  onClick?: () => void;
};

const FormInput: FC<FormInputProps> = (props) => {
  const [field] = useField(props);
  return (
    <>
      <StyledAnswerInput
        {...field}
        onClick={props?.onClick}
        placeholder={props.placeholder}
        type={props.type}
        multiline
        maxRows={props?.maxRows}
        inputProps={{
          name: props.name,
          style: { fontSize: props.type === "quiz" ? "32px" : "16px" },
        }}
      />
    </>
  );
};

export default FormInput;
