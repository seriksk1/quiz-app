import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

import { schema } from "./validation";
import { IQuestion, IQuiz } from "../../redux/interfaces";

import { AddQuestionList, AddQuestionItem, PreviewImageUpload } from ".";
import { quizSelector } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0;
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

interface QuizFormProps {
  onSubmit: (quiz: IQuiz) => void;
  submitText: string;
}

type FormValues = {
  name: string;
  questions: IQuestion[];
  image: File;
};

const QuizCreatorForm: FC<QuizFormProps> = ({ onSubmit, submitText }) => {
  const { currentQuiz } = useSelector(quizSelector);
  const owner: string = localStorage.getItem("username") || "";

  const defaultValues: IQuiz = currentQuiz || {
    name: "",
    questions: [],
    owner,
  };

  const methods = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   methods.reset(defaultValues);
  // }, []);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          autoComplete="off"
          encType="multipart/form-data">
          <Column>
            <AddQuestionItem type="quiz" />
            <PreviewImageUpload />
            <AddQuestionList />
          </Column>

          <StyledControls>
            <StyledSubmitBtn type="submit">{submitText}</StyledSubmitBtn>
          </StyledControls>
        </form>
      </FormProvider>
    </>
  );
};

export default QuizCreatorForm;
