import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { startQuiz } from "../redux/actions/quiz";
import { IQuiz } from "../redux/interfaces";

import { StyledQuizItem } from "./styled-components";

interface QuizItemProps {
  item: IQuiz;
}

const StyledQuizDescription = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

const StyledQuizName = styled.div`
  position: relative;
  top: 5px;
  left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

const QuizItem: FC<QuizItemProps> = ({ children, item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(startQuiz(item));
    history.push("/quiz");
  };

  return (
    <StyledQuizItem onClick={handleClick}>
      <StyledQuizName>{children}</StyledQuizName>
      <StyledQuizDescription />
    </StyledQuizItem>
  );
};

export default QuizItem;
