import React, { FC } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import { FormInput, FormCheckBox } from "../";

import { StyledAddAnswer, StyledRemoveBtn } from "./style";

interface AddAnswerItemProps {
  selected?: boolean;
  index?: number;
  questionIndex?: number;
  onDelete?: (i: number) => void;
  addAnswer?: () => void;
}

const AddAnswerItem: FC<AddAnswerItemProps> = ({
  selected,
  index,
  questionIndex,
  onDelete,
  addAnswer,
}) => {
  const handleDeleteClick = (e: React.FormEvent) => {
    onDelete!(index!);
  };

  return (
    <StyledAddAnswer>
      <FormCheckBox
        // type="checkbox"
        selected={selected}
        // name={`questions[${questionIndex}].answers[${index}].isRight`}
      />

      <FormInput
        // placeholder={`Answer`}
        // name={`questions[${questionIndex}].answers[${index}].text`}
        // type="text"
        maxRows={4}
        selected={selected}
        onClick={addAnswer}
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
