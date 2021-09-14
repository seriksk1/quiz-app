import React, { FC } from "react";
import styled from "styled-components";

import { IQuiz } from "../redux/interfaces";
import { QuizItem } from "../components";

const StyledQuizesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 75%;
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
            <QuizItem key={item._id} item={item}>
              {item.name}
            </QuizItem>
          );
        })}
    </StyledQuizesList>
  );
};

export default QuizesList;
