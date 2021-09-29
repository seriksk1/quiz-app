import React, { FC, useState } from "react";

import { IAnswer } from "../../redux/interfaces";

import DeleteIcon from "@material-ui/icons/Delete";
import { FormInput } from "../";
import { StyledAddAnswer, StyledCheckBox, StyledRemoveBtn } from "./style";

interface AddAnswerItemProps {
  item: IAnswer;
  selected?: boolean;
  index?: number;
  questionIndex?: number;

  onDelete?: (i: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, i: number) => void;
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

  const handleDeleteClick = (e: React.FormEvent) => {
    onDelete!(index!);
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

      <FormInput
        placeholder={`Answer`}
        name={`questions[${questionIndex}].answers[${index}].text`}
        type="text"
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
