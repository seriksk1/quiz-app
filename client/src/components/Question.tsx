import React, { FC, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

import { setNextQuestion } from "../redux/actions/quiz";

import AnswersList from "./AnswersList";
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
  const { currentQuiz, currentQuestion, currentQuestionIndex }: IQuizState =
    useSelector(quizSelector);

  const dispatch = useDispatch();

  const showNextQuestion = () => {
    dispatch(setNextQuestion());
  };

  return (
    <StyledQuestionItem>
      <StyledQuestionText>{currentQuestion?.text}</StyledQuestionText>
      <StyledQuestionText>
        {currentQuestionIndex < currentQuiz!.questions.length ? (
          <TimeCounter nextQuestion={showNextQuestion} />
        ) : (
          <div>Results</div>
        )}
      </StyledQuestionText>
      <AnswersList
        items={currentQuestion!.answers}
        updateCurrentQuestion={showNextQuestion}
      />
    </StyledQuestionItem>
  );
};

export default Question;
