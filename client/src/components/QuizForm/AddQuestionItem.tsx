import React, { FC } from "react";
import { useSelector } from "react-redux";

import { IQuestion, IQuizState } from "../../redux/interfaces";
import { quizSelector } from "../../redux/selectors";

import { FieldArray } from "formik";
import { AddAnswerList, FormInput } from "../";

import {
  StyledCard,
  StyledCardTop,
  StyledCardBottom,
  StyledControlButton,
  StyledQuestionControls,
  StyledSelectStrip,
  StyledInput,
} from "./style";

export type CardType = string;

interface CardProps {
  item?: IQuestion;
  type?: CardType;
  index?: number;

  onDelete?: (i: number) => void;
}

const AddQuestionItem: FC<CardProps> = ({ type, item, index, onDelete }) => {
  const { selectedCard }: IQuizState = useSelector(quizSelector);

  const handleSelectToggle = () => {};

  const handleQuestionDelete = () => {
    onDelete!(index!);
  };

  const isSelected = () => {
    return item?._id === selectedCard || true;
  };

  return (
    <StyledCard selected={isSelected()} onClick={handleSelectToggle}>
      {isSelected() ? <StyledSelectStrip /> : null}

      <StyledCardTop>
        <FormInput
          type={type}
          name={type === "quiz" ? "name" : `questions.${index}.text`}
          placeholder={type === "quiz" ? "Quiz" : `Question`}
          selected={isSelected()}
        />
      </StyledCardTop>

      <StyledCardBottom>
        {type !== "quiz" ? (
          <FieldArray name={`questions[${index}].answers`}>
            {(arrayHelpers) => (
              <AddAnswerList
                questionIndex={index}
                arrayHelpers={arrayHelpers}
                selected={isSelected()}
              />
            )}
          </FieldArray>
        ) : null}

        {isSelected() && type !== "quiz" ? (
          <StyledQuestionControls>
            <StyledControlButton type="button" onClick={handleQuestionDelete}>
              Delete
            </StyledControlButton>
          </StyledQuestionControls>
        ) : null}
      </StyledCardBottom>
    </StyledCard>
  );
};

export default AddQuestionItem;
