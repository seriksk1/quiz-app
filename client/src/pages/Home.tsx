import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { QuizesList } from "../components";
import { clearQuiz, fetchQuizes } from "../redux/actions/quiz";
import { clearAnswers } from "../redux/actions/user";

import { IQuizState } from "../redux/interfaces";
import { quizSelector } from "../redux/selectors";

import { StyledButton } from "../components/styled-components";

const StyledCreateQuizBtn = styled(StyledButton)`
  display: flex;
  padding: 10px;
  width: fit-content;

  font-size: 28px;
  padding: 0 8px;
  margin: 10px auto;

  &:hover {
    filter: none;
    background-color: #312e2e;
  }
`;

const Home: FC = () => {
  const dispatch = useDispatch();
  const { quizes }: IQuizState = useSelector(quizSelector);

  useEffect(() => {
    dispatch([clearQuiz(), clearAnswers()]);
    dispatch(fetchQuizes());
  }, []);

  return (
    <>
      <QuizesList items={quizes} />
      <StyledCreateQuizBtn>+</StyledCreateQuizBtn>
    </>
  );
};

export default Home;
