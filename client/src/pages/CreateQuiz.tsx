import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import styled from "styled-components";

// import { startCreateQuiz } from "../redux/actions/quizCreation";
import { QuizForm } from "../components";

const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

function CreateQuiz() {
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startCreateQuiz());
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
