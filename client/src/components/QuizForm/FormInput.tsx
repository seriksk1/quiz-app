import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import { StyledAnswerInput } from "./style";

type FormInputProps = {
  selected?: boolean;
  maxRows?: number;
  register?: any;
  name?: any;
  type?: any;
  placeholder?: any;
  value?: string;
  onClick?: () => void;
};

const FormInput: FC<FormInputProps> = ({
  name,
  type,
  placeholder,
  value,
  onClick,
}) => {
  const { register } = useFormContext();
  return (
    <>
      <StyledAnswerInput
        {...register(name)}
        placeholder={placeholder}
        onClick={onClick}
        type={type}
        value={value}
        inputProps={{
          name: name,
          style: { fontSize: type === "quiz" ? "32px" : "16px" },
        }}
      />
    </>
  );
};

export default FormInput;
