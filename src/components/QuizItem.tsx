import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { startQuiz } from "../redux/actions/quiz";
import { IQuiz } from "../redux/interfaces";

const StyledQuizItem = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 10px 0;
  box-sizing: border-box;
  background-color: #2a9d8f;
  margin: 15px 0;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 20px;
  color: #fff;

  &:hover {
    background-color: #28776e;
  }
`;

interface QuizItemProps {
  item: IQuiz;
}

const QuizItem: FC<QuizItemProps> = ({ children, item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(startQuiz(item));
    history.push("/quiz");
  };

  return <StyledQuizItem onClick={handleClick}>{children}</StyledQuizItem>;
};

export default QuizItem;
