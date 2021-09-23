import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { StyledButton } from "../components/styled-components";
import { AddQuestionList, Card } from "../components";

import { newQuestion, startCreateQuiz } from "../redux/actions/quizCreation";
import { quizSelector } from "../redux/selectors";
import { IQuizState } from "../redux/interfaces";

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
  width: fit-content;
  margin: 0px 10px 25px;
  padding: 10px 15px;
  background-color: #309d8f;
  cursor: pointer;
  border-radius: 15px;
  border: none;

  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #25796e;
  }
`;

const StyledControls = styled.div`
  display: flex;
  justify-content: center;
`;

function CreateQuiz() {
  const dispatch = useDispatch();
  const { quizToCreate }: IQuizState = useSelector(quizSelector);

  const handleCreateQuiz = () => {
    console.log(quizToCreate);
  };

  const handleAddQuestion = () => {
    console.log("add question");
    dispatch(newQuestion(quizToCreate?._id));
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
      </Column>

      <StyledControls>
        <StyledCreateQuizBtn onClick={handleAddQuestion}>
          Add question
        </StyledCreateQuizBtn>
        <StyledCreateQuizBtn onClick={handleCreateQuiz}>
          Create quiz
        </StyledCreateQuizBtn>
      </StyledControls>
    </>
  );
}

export default CreateQuiz;
