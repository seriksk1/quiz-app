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
  return (
    <>
      <StyledCheckBox
        type={props.type}
        {...register(props.name)}
        variant="primary"
        disabled={!props?.selected}
      />
    </>
  );
};

export default FormCheckBox;
