import React, { FC, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { setIsAnswered, setNextQuestion } from "../redux/actions/quiz";

import { quizSelector } from "../redux/selectors";
import { IQuizState } from "../redux/interfaces";

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
  const { currentQuiz, currentQuestion }: IQuizState =
    useSelector(quizSelector);

  const dispatch = useDispatch();
  const history = useHistory();
  const refIndex = useRef<number>(0);

  const isNextIndexValid = () => {
    return refIndex.current !== currentQuiz?.questions.length! - 1;
  };

  const showNextQuestion = () => {
    dispatch(setIsAnswered(true));

    setTimeout(() => {
      dispatch(setIsAnswered(false));

      if (isNextIndexValid()) {
        refIndex.current++;
        dispatch(setNextQuestion());
      } else {
        history.push("/results");
      }
    }, 1000);
  };

  return (
    <StyledQuestionItem>
      <StyledQuestionText>{currentQuestion?.text}</StyledQuestionText>
      <StyledQuestionText>
        <TimeCounter nextQuestion={showNextQuestion} />
      </StyledQuestionText>
      <AnswersList
        items={currentQuestion!.answers}
        updateCurrentQuestion={showNextQuestion}
      />
    </StyledQuestionItem>
  );
};

export default Question;
