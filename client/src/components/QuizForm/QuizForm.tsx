import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { IQuestion, IQuiz } from "../../redux/interfaces";
import { createQuiz } from "../../redux/actions/quizCreation";
import { AddQuestionList, AddQuestionItem } from "../";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmitBtn = styled.button`
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

const StyledControls = styled.div`
  display: flex;
  justify-content: center;
`;

interface QuizFormProps {}

type FormControlType = {
  name: string;
  questions: IQuestion[];
};

const QuizForm: FC<QuizFormProps> = () => {
  const dispatch = useDispatch();

  const defaultValues: IQuiz = { name: "", questions: [] };

  const { handleSubmit } = useForm<FormControlType>();

  const onSubmit = (quiz: IQuiz) => {
    dispatch(createQuiz(quiz));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <AddQuestionItem type="quiz" />
          <AddQuestionList />
        </Column>

        <StyledControls>
          <StyledSubmitBtn type="submit">Create quiz</StyledSubmitBtn>
        </StyledControls>
      </form>
    </>
  );
};

export default QuizForm;
