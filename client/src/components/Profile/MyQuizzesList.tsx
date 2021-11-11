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
  avatar: string;
  items: IQuiz[] | null;
}

const MyQuizzesList: FC<Props> = ({ items, avatar }) => {
  return (
    <StyledQuizzesList>
      {items &&
        items.map((item) => {
          return (
            <MyQuizzesListItem key={item._id} avatar={avatar} item={item} />
          );
        })}
    </StyledQuizzesList>
  );
};

export default MyQuizzesList;
