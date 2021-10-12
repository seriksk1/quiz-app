import React from "react";
import styled from "styled-components";
import MyQuizzesListItem from "./MyQuizzesListItem";

const StyledQuizzesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
`;

export interface IMyQuiz {
  id: number;
  name: string;
  questionsCount: number;
  time: number;
  players: number;
}

function MyQuizzes() {
  const myQuizzes: IMyQuiz[] = [
    { id: 1, name: "Item", questionsCount: 4, time: 2, players: 1 },
    { id: 2, name: "Item", questionsCount: 8, time: 4, players: 99 },
    { id: 3, name: "Item", questionsCount: 12, time: 6, players: 100 },
  ];

  return (
    <>
      <StyledTitle>My quizzes:</StyledTitle>
      <StyledQuizzesList>
        {myQuizzes.map((item) => {
          return <MyQuizzesListItem item={item} />;
        })}
      </StyledQuizzesList>
    </>
  );
}

export default MyQuizzes;
