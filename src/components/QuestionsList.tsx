import React, { FC } from "react";
import styled from "styled-components";

import { QuestionItem } from "../components";
import { IQuestion } from "../redux/interfaces";

interface QuestionsListProps {
  items: IQuestion[];
}

const StyledQuestionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionsList: FC<QuestionsListProps> = ({ items }) => {
  return (
    <StyledQuestionsList>
      {items &&
        items.map((item) => {
          return <QuestionItem key={item.id} item={item} />;
        })}
      <hr style={{ width: "100%" }} />
    </StyledQuestionsList>
  );
};

export default QuestionsList;
