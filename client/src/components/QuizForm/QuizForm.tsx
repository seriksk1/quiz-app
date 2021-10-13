import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import * as yup from "yup";

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

type FormValues = {
  name: string;
  questions: IQuestion[];
};

const schema = yup
  .object({
    name: yup.string().required("Quiz name is required"),
    questions: yup.array().of(
      yup.object().shape({
        text: yup.string().required("Question name is required"),
        answers: yup.array().of(
          yup.object().shape({
            text: yup.string().required("Answer text is required"),
            isRight: yup.boolean(),
          })
        ),
      })
    ),
  })
  .required();

const QuizForm: FC<QuizFormProps> = () => {
  const owner: string = localStorage.getItem("username") || "";

  const defaultValues: IQuiz = {
    name: "",
    questions: [],
    owner: owner,
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (quiz: IQuiz) => {
    console.log(quiz);
    createQuiz(quiz);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
          <Column>
            <AddQuestionItem type="quiz" />
            <AddQuestionList />
          </Column>

          <StyledControls>
            <StyledSubmitBtn type="submit">Create quiz</StyledSubmitBtn>
          </StyledControls>
        </form>
      </FormProvider>
    </>
  );
};

export default QuizForm;
