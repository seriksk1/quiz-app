import React, { FC } from "react";
import styled from "styled-components";

import { Answer } from "../redux/types";
import AnswerItem from "./AnswerItem";

interface AnswersListProps {
  items: Answer[];
}

const StyledAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswersList: FC<AnswersListProps> = ({ items }) => {
  return (
    <StyledAnswersContainer>
      {items &&
        items.map((item) => {
          return <AnswerItem key={`${item.id}`} item={item} />;
        })}
    </StyledAnswersContainer>
  );
};

export default AnswersList;
