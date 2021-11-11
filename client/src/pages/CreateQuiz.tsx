import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { QuizCreatorForm } from "../components";
import { clearQuiz } from "../redux/actions/quiz";
import { createQuiz } from "../redux/actions/quizCreation";
import { IQuiz } from "../redux/interfaces";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function CreateQuiz() {
  const dispatch = useDispatch();
  const handleSubmit = (quiz: IQuiz) => {
    const formData = new FormData();
    console.log(quiz);

    formData.append("data", JSON.stringify(quiz));

    if (quiz.image) {
      formData.append("image", quiz.image, quiz.image.name);
    }

    createQuiz(formData);
  };

  return (
    <>
      <StyledTitle>Quiz Creator</StyledTitle>
      <QuizCreatorForm onSubmit={handleSubmit} submitText="Create quiz" />
    </>
  );
}

export default CreateQuiz;
