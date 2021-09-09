import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { quizSelector, userSelector } from "../redux/selectors";
import { IQuizState } from "../redux/reducers/quiz";
import { IUserState } from "../redux/reducers/user";

import { StyledTitle } from "../components/styled-components";

const StyledTitleCentre = styled(StyledTitle)`
  font-size: 28px;
  text-align: center;
`;

const Results = () => {
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
    <StyledTitleCentre>
      Your score: {getResults()} of {currentQuiz?.questions.length}
    </StyledTitleCentre>
  );
};

export default Results;
