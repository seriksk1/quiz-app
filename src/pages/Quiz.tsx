import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

import { QuestionsList } from "../components";
import { StyledTitle } from "../components/styled-components";

interface QuizProps {}

const StyledSecondaryText = styled.p`
  font-size: 16px;
  margin: 10px 0 0 0;
  color: #a5a5a5;
`;

const Quiz: FC<QuizProps> = () => {
  const { currentQuiz }: IQuizState = useSelector(quizSelector);
  const { name, questions } = currentQuiz!;

  return (
    <>
      <StyledTitle>{name}</StyledTitle>
      <QuestionsList items={questions} />
      <StyledSecondaryText>Question 1 of 5</StyledSecondaryText>
    </>
  );
};

export default Quiz;
