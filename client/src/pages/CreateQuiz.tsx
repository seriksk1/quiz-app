import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { AddQuestionList, Card } from "../components";

import { startCreateQuiz } from "../redux/actions/quizCreation";
import { quizSelector } from "../redux/selectors";
import { IQuizState } from "../redux/interfaces";
import { StyledButton } from "../components/styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCreateQuizBtn = styled(StyledButton)`
  max-width: 200px;
  margin-bottom: 20px;
`;

function CreateQuiz() {
  const dispatch = useDispatch();
  const { quizToCreate }: IQuizState = useSelector(quizSelector);

  const handleCreateQuiz = () => {
    console.log(quizToCreate);
  };

  useEffect(() => {
    dispatch(startCreateQuiz());
    console.log("Creating new quiz");
  }, []);

  return (
    <>
      <Column>
        <StyledTitle>Create Quiz</StyledTitle>
        <Card type="quiz" item={undefined} />
        <AddQuestionList items={quizToCreate?.questions!} />
        <StyledCreateQuizBtn onClick={handleCreateQuiz}>
          Create quiz
        </StyledCreateQuizBtn>
      </Column>
    </>
  );
}

export default CreateQuiz;
