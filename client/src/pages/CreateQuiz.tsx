import React, { useEffect } from "react";
import styled from "styled-components";

import { QuizForm } from "../components";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function CreateQuiz() {
  useEffect(() => {
    console.log("Creating new quiz");
  }, []);

  return (
    <>
      <StyledTitle>Create Quiz</StyledTitle>
      <QuizForm />
    </>
  );
}

export default CreateQuiz;
