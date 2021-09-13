import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { QuizesList } from "../components";
import { clearQuiz, fetchQuizes } from "../redux/actions/quiz";
import { clearAnswers } from "../redux/actions/user";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

function Home() {
  const dispatch = useDispatch();
  const { quizes }: IQuizState = useSelector(quizSelector);

  useEffect(() => {
    dispatch([clearQuiz(), clearAnswers()]);
    dispatch(fetchQuizes());
  }, []);

  return (
    <>
      <QuizesList items={quizes} />
    </>
  );
}

export default Home;
