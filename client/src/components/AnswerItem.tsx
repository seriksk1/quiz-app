import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addAnswer } from "../redux/actions/user";
import { quizSelector } from "../redux/selectors";
import { IQuizState, IAnswer } from "../redux/interfaces";

import { StyledAnswerItem, StyledButton } from "./styled-components";

interface AnswerItemProps {
  item: IAnswer;
  updateCurrentQuestion: Function;
}

const AnswerItem: FC<AnswerItemProps> = ({ item, updateCurrentQuestion }) => {
  const dispatch = useDispatch();
  const { currentQuestion }: IQuizState = useSelector(quizSelector)!;

  const handleClick = () => {
    dispatch([addAnswer(item.id)]);
    updateCurrentQuestion();
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
      <StyledButton color={getAnswerBtnColor()} onClick={handleClick}>
        {item.text}
      </StyledButton>
    </StyledAnswerItem>
  );
};

export default AnswerItem;
