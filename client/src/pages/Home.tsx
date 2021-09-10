import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { QuizesList } from "../components";
import { clearQuiz, fetchQuizes } from "../redux/actions/quiz";
import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

const StyledTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;
`;

function Home() {
  const dispatch = useDispatch();
  const { quizes }: IQuizState = useSelector(quizSelector);

  useEffect(() => {
    dispatch(clearQuiz());
    dispatch(fetchQuizes());
  }, []);

  return (
    <>
      <QuizesList items={quizes} />
    </>
  );
}

export default Home;
