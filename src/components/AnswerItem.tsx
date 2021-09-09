import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
import { setIsAnswered } from "../redux/actions/quiz";
import { addAnswer } from "../redux/actions/user";

import { quizSelector } from "../redux/selectors";
import { Answer } from "../redux/types";

const StyledAnswerItem = styled.div`
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 15px;
  }
`;

const StyledAnswerText = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 10px;
`;

const StyledButton = styled.button(
  ({ color }: any) => `
  width: 120px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border: none;
  max-width: 500px;
  padding: 10px 0;
  box-sizing: border-box;

  background-color: ${color || "#2a9d8f"} ;

  margin: 0;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 1px 2px #d6d6d6;
  }
`
);

// background-color: #ff5151; - wrong
// background-color: #53da4a; - right

interface AnswerItemProps {
  item: Answer;
}

const AnswerItem: FC<AnswerItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const { currentQuestion }: IQuizState = useSelector(quizSelector)!;

  const handleClick = () => {
    dispatch([setIsAnswered(), addAnswer(item.id)]);
  };

  const isAnswerRight = () => {
    return currentQuestion?.rightAnswerId === item.id;
  };

  const getAnswerBtnColor = () => {
    if (currentQuestion?.isAnswered) {
      return isAnswerRight() ? "#33bb2a" : "#dc0000";
    }
  };

  return (
    <StyledAnswerItem>
      <StyledAnswerText>{item.text}</StyledAnswerText>
      <StyledButton color={getAnswerBtnColor()} onClick={handleClick}>
        Answer
      </StyledButton>
    </StyledAnswerItem>
  );
};

export default AnswerItem;
