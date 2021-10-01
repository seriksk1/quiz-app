import React, { FC } from "react";

import { StyledCheckBox } from "./style";

type FormCheckBoxProps = {
  selected?: boolean;
};

const FormCheckBox: FC<FormCheckBoxProps> = (props) => {
  // const [field] = useField(props);
  return (
    <>
      <StyledCheckBox
        // {...field}
        // type={props.type}
        // name={props.name}
        variant="primary"
        disabled={!props?.selected}
      />
    </>
  );
};

export default FormCheckBox;
