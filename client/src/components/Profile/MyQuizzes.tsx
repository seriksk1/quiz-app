import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IQuizState } from "../../redux/interfaces";
import { quizSelector } from "../../redux/selectors";
import { fetchUserQuizzes } from "../../redux/actions/quiz";

import MyQuizzesList from "./MyQuizzesList";

function MyQuizzes() {
  const owner = localStorage.getItem("username") || "";
  const { quizes }: IQuizState = useSelector(quizSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserQuizzes(owner));
  }, []);

  return (
    <>
      <MyQuizzesList items={quizes} />
    </>
  );
}

export default MyQuizzes;
