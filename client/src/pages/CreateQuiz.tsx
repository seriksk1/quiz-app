import React, { useEffect } from "react";
import styled from "styled-components";

import { QuizCreatorForm } from "../components";
import { createQuiz } from "../redux/actions/quizCreation";
import { IQuiz } from "../redux/interfaces";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function CreateQuiz() {
  const handleSubmit = (quiz: IQuiz) => {
    const formData = new FormData();

    if (quiz.previewImage) {
      formData.append(
        "previewImage",
        quiz.previewImage,
        quiz.previewImage.name
      );
    }

    console.log(quiz);
    createQuiz(quiz, formData);
  };

  useEffect(() => {
    console.log("Quiz Creator");
  }, []);

  return (
    <>
      <StyledTitle>Quiz Creator</StyledTitle>
      <QuizCreatorForm onSubmit={handleSubmit} submitText="Create quiz" />
    </>
  );
}

export default CreateQuiz;
