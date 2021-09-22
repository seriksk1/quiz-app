import React, { FC } from "react";
import styled from "styled-components";

import { IAnswer } from "../redux/interfaces";
import AnswerItem from "./AnswerItem";

interface AnswersListProps {
  items: IAnswer[];
  updateCurrentQuestion: Function;
}

const StyledAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswersList: FC<AnswersListProps> = ({
  items,
  updateCurrentQuestion,
}) => {
  return (
    <StyledAnswersContainer>
      {items &&
        items.map((item) => {
          return (
            <AnswerItem
              key={`${item._id}`}
              item={item}
              updateCurrentQuestion={updateCurrentQuestion}
            />
          );
        })}
    </StyledAnswersContainer>
  );
};

export default AnswersList;
