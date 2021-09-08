import React, { FC } from "react";
import styled from "styled-components";

import { IQuestion } from "../redux/interfaces";
import AnswersList from "./AnswersList";

const StyledQuestionItem = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 10px 0;
`;

const StyledQuestionText = styled.h4`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 30px;
  max-width: 90%;
`;

interface QuestionItemProps {
  item: IQuestion;
}

const QuestionItem: FC<QuestionItemProps> = ({ item }) => {
  const { text, answers } = item;

  return (
    <StyledQuestionItem>
      <StyledQuestionText>{text}</StyledQuestionText>
      <AnswersList items={answers} />
    </StyledQuestionItem>
  );
};

export default QuestionItem;
