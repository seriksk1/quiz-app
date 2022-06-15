import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { QuizCreatorForm } from "../components";
import { showNotification } from "../redux/actions/notification";
import { createQuiz } from "../redux/actions/quizCreation";
import { TOAST_OPTION } from "../redux/contants";
import { IQuiz } from "../redux/interfaces";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function CreateQuiz() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (quiz: IQuiz) => {
    const formData = new FormData();
    console.log(quiz);

    formData.append("data", JSON.stringify(quiz));

    if (quiz.image) {
      formData.append("image", quiz.image, quiz.image.name);
    }

    const created = await createQuiz(formData);

    if (created) {
      history.push(`/profile/${quiz.owner}`);
      dispatch(showNotification(TOAST_OPTION.QUIZ.CREATE));
    } else {
      dispatch(showNotification(TOAST_OPTION.QUIZ.ERROR_CREATE));
    }
  };

  return (
    <>
      <StyledTitle>Quiz Creator</StyledTitle>
      <QuizCreatorForm onSubmit={handleSubmit} submitText="Create quiz" />
    </>
  );
}

export default CreateQuiz;
