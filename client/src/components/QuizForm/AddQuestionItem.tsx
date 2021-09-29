import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IQuizState } from "../../redux/interfaces";
import { quizSelector } from "../../redux/selectors";
import { setSelectedCard } from "../../redux/actions/quizCreation";

import { FieldArray } from "formik";
import { AddAnswerList, FormInput } from "../";

import {
  StyledCard,
  StyledCardTop,
  StyledCardBottom,
  StyledControlButton,
  StyledQuestionControls,
  StyledSelectStrip,
} from "./style";

type CardType = string;

interface CardProps {
  type?: CardType;
  index?: number;

  onDelete?: (i: number) => void;
}

const AddQuestionItem: FC<CardProps> = ({ type, index, onDelete }) => {
  const dispatch = useDispatch();
  const { selectedCard }: IQuizState = useSelector(quizSelector);

  const handleCardSelect = () => {
    dispatch(setSelectedCard(index));
  };

  const handleQuestionDelete = () => {
    onDelete!(index!);
  };

  const isSelected = () => {
    return index === selectedCard;
  };

  return (
    <StyledCard selected={isSelected()} onClick={handleCardSelect}>
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
