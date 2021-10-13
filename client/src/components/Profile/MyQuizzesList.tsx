import React, { FC } from "react";
import styled from "styled-components";
import { IQuiz } from "../../redux/interfaces";
import MyQuizzesListItem from "./MyQuizzesListItem";

const StyledQuizzesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0px;
  box-sizing: border-box;
`;

interface Props {
  items: IQuiz[] | null;
}

const MyQuizzesList: FC<Props> = ({ items }) => {
  return (
    <StyledQuizzesList>
      {items &&
        items.map((item) => {
          return <MyQuizzesListItem key={item._id} item={item} />;
        })}
    </StyledQuizzesList>
  );
};

export default MyQuizzesList;
