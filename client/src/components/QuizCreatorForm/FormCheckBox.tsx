import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { StyledCheckBox } from "./style";

type FormCheckBoxProps = {
  selected?: boolean;
  name?: any;
  type?: any;
};

const FormCheckBox: FC<FormCheckBoxProps> = (props) => {
  const { register } = useFormContext();

  const handleRegister = () => {
    if (props.name !== "mockAnswer") {
      return register(props.name);
    } else {
      return null;
    }
  };

  return (
    <>
      <StyledCheckBox
        {...handleRegister()}
        type="checkbox"
        variant="primary"
        disabled={!props?.selected}
      />
    </>
  );
};

export default FormCheckBox;
