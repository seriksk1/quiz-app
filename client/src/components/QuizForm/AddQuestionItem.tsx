import React, { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";

import { IQuestion, IQuizState } from "../../redux/interfaces";
import { quizSelector } from "../../redux/selectors";

import AddAnswerList from "./AddAnswerList";
import { Field, FieldArray } from "formik";

import {
  StyledInput,
  StyledCard,
  StyledCardTop,
  StyledCardBottom,
  StyledControlButton,
  StyledQuestionControls,
  StyledSelectStrip,
} from "./style";

type CardType = "quiz" | "question" | null;

interface CardProps {
  item?: IQuestion;
  type?: CardType;
  index?: number;
  onDelete?: (i: number) => void;
  onChange?: (e: ChangeEvent) => void;
}

const AddQuestionItem: FC<CardProps> = ({
  type,
  item,
  index,
  onDelete,
  onChange,
}) => {
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
        <Field
          component={StyledInput}
          multiline
          type={type}
          selected={isSelected()}
          onChange={onChange}
          defaultValue={type === "quiz" ? "New quiz" : `Question ${index}`}
          placeholder={type === "quiz" ? "Quiz" : `Question`}
          inputProps={{
            name: type === "quiz" ? "name" : `questions[${index}].text`,
            style: { fontSize: type === "quiz" ? "32px" : "16px" },
          }}
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
