import React, { FC } from "react";

import { StyledAnswerInput } from "./style";

type FormInputProps = {
  selected?: boolean;
  maxRows?: number;
  onClick?: () => void;
};

const FormInput: FC<FormInputProps> = (props) => {
  // const [field] = useField(props);
  return (
    <>
      <StyledAnswerInput
        onClick={props?.onClick}
        maxRows={props?.maxRows}
        multiline
        // {...field}
        // placeholder={props.placeholder}
        // type={props.type}
        // inputProps={{
        //   name: props.name,
        //   style: { fontSize: props.type === "quiz" ? "32px" : "16px" },
        // }}
      />
    </>
  );
};

export default FormInput;
