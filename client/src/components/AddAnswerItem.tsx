import React, { FC } from "react";

import { TextField } from "@material-ui/core";
import styled from "styled-components";
const StyledAddAnswer = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;

const StyledInput = styled(TextField)`
  width: 300px;

  & input {
    padding: 10px;
  }
`;

interface AddAnswerItemProps {
  item: any;
}

const AddAnswerItem: FC<AddAnswerItemProps> = ({ item }) => {
  return (
    <StyledAddAnswer key={item}>
      <StyledInput
        multiline
        maxRows={4}
        variant="outlined"
        type="text"
        name=""
        id=""
      />
    </StyledAddAnswer>
  );
};

export default AddAnswerItem;
