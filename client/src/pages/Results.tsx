import React, { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { StyledTitle } from "../components/styled-components";

import { quizSelector, userSelector } from "../redux/selectors";
import { IQuizState, IUserState } from "../redux/interfaces";

const StyledTitleCentre = styled(StyledTitle)`
  font-size: 28px;
  text-align: center;
`;

const Results: FC = () => {
  const { currentQuiz }: IQuizState = useSelector(quizSelector);
  const { answers }: IUserState = useSelector(userSelector);

  const getAllRightAnswers = () => {
    return currentQuiz?.questions.map((item) => {
      return item.rightAnswerId;
    });
  };

  const getResults = () => {
    const rightAnswers = getAllRightAnswers();

    return rightAnswers?.reduce((sum, item, i) => {
      console.log(item, answers![i]);
      return item === answers![i] ? sum + 1 : sum;
    }, 0);
  };

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
