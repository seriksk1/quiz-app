import React, { FC, useState } from "react";
import styled from "styled-components";

import DeleteIcon from "@material-ui/icons/Delete";
import { TextField, IconButton, Checkbox } from "@material-ui/core";
import { IAnswer } from "../redux/interfaces";

const StyledAddAnswer = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledInput = styled(TextField)`
  width: 100%;
  & input {
    padding: 10px;
  }

  & :before {
    display: ${({ selected }: any) => (selected ? "none" : "none")};
  }

  &:hover :before {
    ${({ selected }: any) => {
      return selected
        ? ` 
      display: flex;
      border-bottom: 1px solid rgb(218 218 218 / 42%) !important;
      `
        : null;
    }}

`;

const StyledCheckBox = styled(Checkbox)`
  display: flex;
  align-self: center;

  width: fit-content;
  height: fit-content;

  margin-right: 15px !important;
  padding: 0px !important;
`;

const StyledRemoveBtn = styled(IconButton)`
  display: flex;
  align-self: center;

  width: fit-content;
  height: fit-content;

  margin-left: 10px !important;
  padding: 5px !important;
`;

interface AddAnswerItemProps {
  item: IAnswer;
  selected?: boolean;
}

const AddAnswerItem: FC<AddAnswerItemProps> = ({ item, selected }) => {
  const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false);

  const handleDeleteClick = (e: React.FormEvent) => {
    console.log("delete");
  };

  const handleCheckboxToggle = () => {
    setIsRightAnswer((prev) => !prev);
    console.log("toggle checkbox");
  };

  return (
    <StyledAddAnswer>
      <StyledCheckBox
        onClick={handleCheckboxToggle}
        checked={isRightAnswer}
        disabled={!selected}
        color="primary"
      />

      <StyledInput
        id=""
        name=""
        type="text"
        multiline
        maxRows={4}
        defaultValue={`Variant ${item.id}`}
        placeholder="Variant"
        selected={selected}
      />

      {selected ? (
        <StyledRemoveBtn
          onClick={handleDeleteClick}
          aria-label="delete"
          size="medium"
        >
          <DeleteIcon fontSize="small" />
        </StyledRemoveBtn>
      ) : null}
    </StyledAddAnswer>
  );
};

export default AddAnswerItem;
