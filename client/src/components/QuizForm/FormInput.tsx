import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import { StyledAnswerInput } from "./style";

type FormInputProps = {
  selected?: boolean;
  maxRows?: number;
  onClick?: () => void;
  register?: any;
  name?: any;
  type?: any;
  placeholder?: any;
};

const FormInput: FC<FormInputProps> = ({ name, type, placeholder }) => {
  const { register } = useFormContext();
  return (
    <>
      <StyledAnswerInput
        {...register(name)}
        placeholder={placeholder}
        type={type}
        inputProps={{
          name: name,
          style: { fontSize: type === "quiz" ? "32px" : "16px" },
        }}
      />
    </>
  );
};

export default FormInput;
