import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { quizSelector } from "../redux/selectors";
import { IQuizState } from "../redux/interfaces";

import { Question } from "../components";

const StyledSecondaryText = styled.p`
  font-size: 16px;
  margin: 0;
  color: #a5a5a5;
  text-align: center;
`;

const Quiz: FC = () => {
  const { currentQuiz, currentQuestionIndex }: IQuizState =
    useSelector(quizSelector);

  return (
    <>
      <Question />
      <StyledSecondaryText>
        Question {currentQuestionIndex + 1} of {currentQuiz?.questions.length}
      </StyledSecondaryText>
    </>
  );
};

export default Quiz;
