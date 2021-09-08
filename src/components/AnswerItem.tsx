import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IQuizState } from "../redux/reducers/quiz";
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

const StyledButton = styled.button`
  width: 120px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border: none;
  max-width: 500px;
  padding: 10px 0;
  box-sizing: border-box;

  background-color: #2a9d8f;

  margin: 0;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #28776e;
  }
`;

// background-color: #ff5151; - wrong
// background-color: #53da4a; - right

interface AnswerItemProps {
  item: Answer;
}

const AnswerItem: FC<AnswerItemProps> = ({ item }) => {
  const { currentQuestion }: IQuizState = useSelector(quizSelector)!;

  const handleClick = () => {
    console.log(
      currentQuestion?.rightAnswerId === item.id
        ? "Right answer"
        : "Wrong answer"
    );
  };

  return (
    <StyledAnswerItem>
      <StyledAnswerText>{item.text}</StyledAnswerText>
      <StyledButton onClick={handleClick}>Answer</StyledButton>
    </StyledAnswerItem>
  );
};

export default AnswerItem;
