import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { startQuiz } from "../redux/actions/quiz";
import { IQuiz } from "../redux/interfaces";

import { StyledQuizItem } from "./styled-components";

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
