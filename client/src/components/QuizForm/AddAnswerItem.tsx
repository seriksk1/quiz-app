import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

import DeleteIcon from "@material-ui/icons/Delete";
import { FormInput, FormCheckBox } from "../";

import { StyledAddAnswer, StyledRemoveBtn } from "./style";
import { useEffect } from "react";

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

  const methods = useFormContext();

  useEffect(() => {
    return () => {
      methods.unregister([`questions[${questionIndex}].answers[${index}]`]);
    };
  }, []);

  return (
    <StyledAddAnswer>
      <FormCheckBox
        type="checkbox"
        selected={selected}
        name={`questions[${questionIndex}].answers[${index}].isRight`}
      />

      <FormInput
        type="text"
        placeholder={`Answer`}
        name={`questions[${questionIndex}].answers[${index}].text`}
        maxRows={4}
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
