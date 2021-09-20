import React, { useState } from "react";
import styled from "styled-components";

import { TextField } from "@material-ui/core";
import { StyledCreateBtn } from "../components/styled-components";
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const emptyQuestion = {
  answers: ["Вариант 1"],
};

function CreateQuiz() {
  const [questions, setQuestions] = useState<any>([]);

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();

    setQuestions((prev: any) => [...prev, emptyQuestion]);
  };

  return (
    <>
      <Column>
        <StyledTitle>Create Quiz</StyledTitle>
        <StyledForm>
          <TextField id="name" type="text" name="name" label="Type quiz name" />
          <AddQuestionList items={questions} />
          <StyledCreateBtn onClick={handleAddQuestion}>+</StyledCreateBtn>
        </StyledForm>
      </Column>
    </>
  );
}

export default CreateQuiz;
