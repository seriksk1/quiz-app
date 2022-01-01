import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const handleSubmit = async (quiz: IQuiz) => {
    console.log(quiz);
    const formData = new FormData();
    formData.append("data", JSON.stringify(quiz));

    if (quiz.image?.name) {
      formData.append("image", quiz.image, quiz.image.name);
    }

    const created = await updateQuiz(formData);

    if (created) {
      history.push(`/profile/${quiz.owner}`);
    }
  };

  return (
    <>
      <StyledTitle>Quiz Creator</StyledTitle>
      <QuizCreatorForm onSubmit={handleSubmit} submitText="Save changes" />
    </>
  );
}

export default EditQuiz;
