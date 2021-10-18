import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IQuizState } from "../../redux/interfaces";
import { quizSelector } from "../../redux/selectors";
import { fetchUserQuizzes } from "../../redux/actions/quiz";

import MyQuizzesList from "./MyQuizzesList";

function MyQuizzes() {
  const { quizzes }: IQuizState = useSelector(quizSelector);
  const dispatch = useDispatch();

  const { username } = useParams();

  useEffect(() => {
    dispatch(fetchUserQuizzes(username));
  }, []);

  return (
    <>
      <MyQuizzesList items={quizzes} />
    </>
  );
}

export default MyQuizzes;
