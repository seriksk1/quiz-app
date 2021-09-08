import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

import { QuestionItem } from "../components";
import { StyledTitle, StyledLink } from "../components/styled-components";

interface QuizProps {}

const StyledSecondaryText = styled.p`
  font-size: 16px;
  margin: 0;
  color: #a5a5a5;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const StyledLinkNext = styled(StyledLink)`
  font-size: 16px;
  color: #000;

  &:hover {
    color: gray;
  }
`;

const Quiz: FC<QuizProps> = () => {
  const { currentQuiz }: IQuizState = useSelector(quizSelector);

  return (
    <>
      <StyledTitle>{currentQuiz?.name}</StyledTitle>
      <QuestionItem />
      <StyledBottomContainer>
        <StyledSecondaryText>Question 1 of 5</StyledSecondaryText>
        <StyledLinkNext to="/">Next question {"-->"}</StyledLinkNext>
      </StyledBottomContainer>
    </>
  );
};

export default Quiz;
