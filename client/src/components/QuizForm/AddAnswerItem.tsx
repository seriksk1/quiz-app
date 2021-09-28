import React, { FC, useState } from "react";
import styled from "styled-components";

import { Field } from "formik";
import { TextField, IconButton, Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { IAnswer } from "../../redux/interfaces";

const StyledAddAnswer = styled.div`
  display: flex;
  margin-bottom: 15px;

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
    ${({ selected }: any) =>
      selected
        ? ` 
      display: flex;
      border-bottom: 1px solid rgb(218 218 218 / 42%) !important;`
        : null}
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
  index?: number;
  questionIndex?: number;

  onDelete?: (i: number) => void;
  onChange?: () => void;
  addAnswer?: () => void;
}

const AddAnswerItem: FC<AddAnswerItemProps> = ({
  item,
  selected,
  index,
  questionIndex,

  onDelete,
  onChange,
  addAnswer,
}) => {
  const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false);
  const [text, setText] = React.useState("");

  const handleDeleteClick = (e: React.FormEvent) => {
    onDelete!(index!);
    console.log("delete");
  };

  const handleCheckboxToggle = () => {
    setIsRightAnswer((prev) => !prev);
    console.log("toggle checkbox");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e?.currentTarget.value);
  };

  return (
    <StyledAddAnswer>
      <StyledCheckBox
        onClick={handleCheckboxToggle}
        checked={isRightAnswer}
        disabled={!selected}
        color="primary"
      />

      <Field
        value={text || `Variant`}
        name={`questions[${questionIndex}].answers[${index}].text`}
        type="text"
        multiline
        maxRows={4}
        component={StyledInput}
        selected={selected}
        onClick={addAnswer}
        onChange={handleChange}
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
