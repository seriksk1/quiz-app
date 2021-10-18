import React, { useEffect } from "react";
import styled from "styled-components";

import { updateQuiz } from "../redux/actions/quizCreation";
import { IQuiz } from "../redux/interfaces";

import QuizCreatorForm from "../components/QuizCreatorForm/QuizCreatorForm";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function EditQuiz() {
  const handleSubmit = (quiz: IQuiz) => {
    updateQuiz(quiz);
  };

  useEffect(() => {
    console.log("Quiz Creator");
  }, []);

  return (
    <>
      <StyledTitle>Quiz Creator</StyledTitle>
      <QuizCreatorForm onSubmit={handleSubmit} submitText="Save changes" />
    </>
  );
}

export default EditQuiz;
