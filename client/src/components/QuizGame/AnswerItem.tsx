import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { writeAnswer } from "../../redux/actions/quiz";
import { IAnswer, IQuizState } from "../../redux/interfaces";
import { quizSelector } from "../../redux/selectors";
import { StyledAnswerItem, StyledButton } from "../styled-components";

interface AnswerItemProps {
  item: IAnswer;
  nextQuestion: Function;
}

const AnswerItem: FC<AnswerItemProps> = ({ item, nextQuestion }) => {
  const dispatch = useDispatch();
  const { currentQuestion }: IQuizState = useSelector(quizSelector);

  const handleClick = () => {
    if (item.isRight) {
      dispatch([writeAnswer(item._id)]);
    }
    nextQuestion();
  };

  const getAnswerBtnColor = () => {
    if (currentQuestion?.isAnswered) {
      return item.isRight ? "#33bb2a" : "#dc0000";
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
