import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";
import AnswersList from "./AnswersList";

import { TIME_TO_ANSWER } from "../redux/contants";
import TimeCounter from "./TimeCounter";

const StyledQuestionItem = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Roboto", sans-serif;
  margin: 10px auto;
  max-width: 90%;
`;

const StyledQuestionText = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 30px;
  text-align: center;
`;

interface QuestionItemProps {}

const Question: FC<QuestionItemProps> = () => {
  const { currentQuestion }: IQuizState = useSelector(quizSelector);

  return (
    <StyledQuestionItem>
      <StyledQuestionText>{currentQuestion?.text}</StyledQuestionText>
      <StyledQuestionText>
        <TimeCounter />
      </StyledQuestionText>
      <AnswersList items={currentQuestion!.answers} />
    </StyledQuestionItem>
  );
};

export default Question;
