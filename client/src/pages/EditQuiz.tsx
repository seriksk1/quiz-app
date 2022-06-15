import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { updateQuiz } from "../redux/actions/quizCreation";
import { IQuiz } from "../redux/interfaces";

import QuizCreatorForm from "../components/QuizCreatorForm/QuizCreatorForm";
import { useDispatch } from "react-redux";
import { showNotification } from "../redux/actions/notification";
import { TOAST_OPTION } from "../redux/contants";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function EditQuiz() {
  const history = useHistory();
  const dispatch = useDispatch();

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
      dispatch(showNotification(TOAST_OPTION.QUIZ.CHANGE));
    } else {
      dispatch(showNotification(TOAST_OPTION.QUIZ.ERROR_CHANGE));
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
