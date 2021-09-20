import React, { FC } from "react";

import { TextField, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";

const StyledAddAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledInput = styled(TextField)`
  width: 300px;

  & input {
    padding: 10px;
  }
`;

const StyledAnswerConfigure = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: 10px;
`;

const StyledCheckBox = styled(Checkbox)`
  & {
    padding: 0 !important;
  }
`;

interface AddAnswerItemProps {
  item: any;
}

const AddAnswerItem: FC<AddAnswerItemProps> = ({ item }) => {
  const handleDeleteClick = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("delete");
  };

  return (
    <StyledAddAnswer key={item}>
      <StyledInput
        multiline
        maxRows={4}
        variant="outlined"
        type="text"
        name=""
        id=""
        defaultValue="Variant 1"
      />
      <StyledAnswerConfigure>
        <IconButton
          onClick={handleDeleteClick}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <StyledCheckBox color="primary" />
      </StyledAnswerConfigure>
    </StyledAddAnswer>
  );
};

export default AddAnswerItem;
