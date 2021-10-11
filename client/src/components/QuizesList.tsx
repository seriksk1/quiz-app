import React, { FC } from "react";
import styled from "styled-components";

import { IQuiz } from "../redux/interfaces";
import { QuizItem } from "../components";

const StyledQuizesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleQuizItemWrapper = styled.div`
  width: 418px;
  padding: 7px 7px 0;
`;

interface QuizesListProps {
  items: IQuiz[] | null;
}

const QuizesList: FC<QuizesListProps> = ({ items }) => {
  return (
    <StyledQuizesList>
      {items &&
        items.map((item) => {
          return (
            <StyleQuizItemWrapper key={item._id}>
              <QuizItem item={item}>{item.name}</QuizItem>
            </StyleQuizItemWrapper>
          );
        })}
    </StyledQuizesList>
  );
};

export default QuizesList;
