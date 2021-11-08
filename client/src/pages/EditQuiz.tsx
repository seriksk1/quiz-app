import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { updateQuiz } from "../redux/actions/quizCreation";
import { clearQuiz } from "../redux/actions/quiz";
import { IQuiz } from "../redux/interfaces";

import QuizCreatorForm from "../components/QuizCreatorForm/QuizCreatorForm";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function EditQuiz() {
  const dispatch = useDispatch();

  const handleSubmit = (quiz: IQuiz) => {
    console.log(quiz);
    const formData = new FormData();
    formData.append("data", JSON.stringify(quiz));

    if (quiz.image?.name) {
      formData.append("image", quiz.image, quiz.image.name);
    }

    updateQuiz(formData);
  };

  return (
    <>
      <StyledTitle>Quiz Creator</StyledTitle>
      <QuizCreatorForm onSubmit={handleSubmit} submitText="Save changes" />
    </>
  );
}

export default EditQuiz;
