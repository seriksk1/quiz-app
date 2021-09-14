import React from "react";
import styled from "styled-components";

import { TextField } from "@material-ui/core";

import { StyledButton } from "../components/styled-components";
import { AddQuestionList } from "../components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const StyledTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

const StyledInput = styled(TextField)`
  padding: 15px;
`;

const StyledCreateBtn = styled(StyledButton)`
  display: flex;
  padding: 10px;
  width: fit-content;

  font-size: 28px;
  padding: 0 8px;
  margin: 0 auto;
  border-radius: 50%;

  &:hover {
    filter: none;
    background-color: #312e2e;
  }
`;

function CreateQuiz() {
  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const items = [1];

  return (
    <>
      <StyledTitle>Create Quiz</StyledTitle>
      <StyledForm>
        <StyledInput id="name" type="text" name="name" label="Type quiz name" />
        <AddQuestionList items={items} />
        <StyledCreateBtn onClick={handleAddQuestion}>+</StyledCreateBtn>
      </StyledForm>
    </>
  );
}

export default CreateQuiz;
