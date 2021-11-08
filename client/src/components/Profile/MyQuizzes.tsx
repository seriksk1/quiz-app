import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IQuizState, IUserState } from "../../redux/interfaces";
import { quizSelector, userSelector } from "../../redux/selectors";
import { fetchUserQuizzes } from "../../redux/actions/quiz";

import MyQuizzesList from "./MyQuizzesList";

const API_URI = process.env.REACT_APP_URI;

function MyQuizzes() {
  const dispatch = useDispatch();

  const { username } = useParams();
  const { quizzes }: IQuizState = useSelector(quizSelector);
  const { avatar }: IUserState = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUserQuizzes(username));
  }, []);

  return (
    <>
      <MyQuizzesList
        avatar={`${API_URI}/uploads/${username}/${avatar}`}
        items={quizzes}
      />
    </>
  );
}

export default MyQuizzes;
