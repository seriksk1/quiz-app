import { ArrayHelpers, useFormikContext } from "formik";
import React, { FC } from "react";
import styled from "styled-components";

import { AddQuestionItem } from "../../components";
import { StyledButton } from "../../components/styled-components";
import { IQuestion, IQuiz } from "../../redux/interfaces";

const StyledControlBtn = styled(StyledButton)`
  width: fit-content;
  margin: 0px 10px 25px;
  padding: 10px 15px;
  background-color: #309d8f;
  cursor: pointer;
  border-radius: 15px;
  border: none;

  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #25796e;
  }
`;

interface AddQuestionListProps {
  arrayHelpers: ArrayHelpers;
}

const AddQuestionList: FC<AddQuestionListProps> = ({ arrayHelpers }) => {
  const { values } = useFormikContext<IQuiz>();

  const onAddQuestion = () => {
    console.log("add question");
    arrayHelpers.push({
      text: "New Question",
      answers: [{ text: "New answer" }],
    });
  };

  const onDelete = (i: number) => {
    arrayHelpers.remove(i);
  };

  return (
    <>
      {values?.questions.map((item: IQuestion, i: number) => {
        return (
          <AddQuestionItem
            key={`${i}`}
            index={i}
            item={item}
            onDelete={onDelete}
          />
        );
      })}
      <StyledControlBtn type="button" onClick={onAddQuestion}>
        Add question
      </StyledControlBtn>
    </>
  );
};

export default AddQuestionList;
