import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

import { Question } from "../components";

import { setNextQuestion } from "../redux/actions/quiz";

interface QuizProps {}

const StyledSecondaryText = styled.p`
  font-size: 16px;
  margin: 0;
  color: #a5a5a5;
  text-align: center;
`;

const Quiz: FC<QuizProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentQuiz, currentQuestion }: IQuizState =
    useSelector(quizSelector);
  const [questionIndex, setQuestionIndex] = useState(0);

  const isNotEnd = () => {
    return currentQuiz!.questions.length > questionIndex + 1;
  };

  const handleNextQuestion = () => {
    if (currentQuestion?.isAnswered) {
      if (isNotEnd()) {
        setQuestionIndex((prev) => prev + 1);
        dispatch(setNextQuestion(questionIndex + 1));
      } else {
        history.push("/results");
      }
    }
  };

  return (
    <>
      <Question />
      <StyledSecondaryText>
        Question {questionIndex + 1} of {currentQuiz?.questions.length}
      </StyledSecondaryText>
    </>
  );
};

export default Quiz;
