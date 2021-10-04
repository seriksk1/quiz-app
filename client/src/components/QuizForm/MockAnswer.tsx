import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import DeleteIcon from "@material-ui/icons/Delete";
import { FormInput, FormCheckBox } from "../";

import { StyledAddAnswer, StyledRemoveBtn } from "./style";

interface MockAnswerProps {
  selected?: boolean;
  index?: number;
  questionIndex?: number;
  onDelete?: (i: number) => void;
  addAnswer?: () => void;
}

const MockAnswer: FC<MockAnswerProps> = ({
  selected,
  index,
  questionIndex,
  onDelete,
  addAnswer,
}) => {
  return (
    <StyledAddAnswer>
      {/* <FormCheckBox
        type="checkbox"
        selected={selected}
        name={`questions[${questionIndex}].answers[${index}].isRight`}
      /> */}

      <input
        type="text"
        placeholder={`Answer`}
        name={`questions[${questionIndex}].answers[${index}].text`}
        // maxRows={4}
        // selected={selected}
        onClick={addAnswer}
      />

      {/* {selected ? (
        <StyledRemoveBtn
          onClick={handleDeleteClick}
          aria-label="delete"
          size="medium"
        >
          <DeleteIcon fontSize="small" />
        </StyledRemoveBtn>
      ) : null} */}
    </StyledAddAnswer>
  );
};

export default MockAnswer;
