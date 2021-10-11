import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { StyledTitle } from "../components/styled-components";

import { quizSelector } from "../redux/selectors";
import { IQuizState } from "../redux/interfaces";
import { clearQuiz } from "../redux/actions/quiz";
import { useEffect } from "react";

const StyledTitleCentre = styled(StyledTitle)`
  font-size: 28px;
  text-align: center;
`;

const Results: FC = () => {
  const dispatch = useDispatch();
  const { currentQuiz, userAnswers }: IQuizState = useSelector(quizSelector);

  const getResults = () => {
    return userAnswers.length;
  };

  const handleClearQuiz = () => {
    dispatch(clearQuiz());
  };

  useEffect(() => {
    console.log("Quiz start");
    return () => handleClearQuiz();
  }, []);

  return (
    <>
      {currentQuiz ? (
        <StyledTitleCentre>
          Your score: {getResults()} of {currentQuiz?.questions.length}
        </StyledTitleCentre>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Results;
