import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";
import AnswersList from "./AnswersList";

const StyledQuestionItem = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 10px 0;
`;

const StyledQuestionText = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 30px;
  max-width: 90%;
`;

interface QuestionItemProps {}

const Question: FC<QuestionItemProps> = () => {
  const { currentQuestion }: IQuizState = useSelector(quizSelector);

  return (
    <StyledQuestionItem>
      <StyledQuestionText>{currentQuestion?.text}</StyledQuestionText>
      <AnswersList items={currentQuestion!.answers} />
    </StyledQuestionItem>
  );
};

export default Question;
