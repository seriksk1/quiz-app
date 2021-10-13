import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { fetchQuizzes } from "../redux/actions/quiz";
import { quizSelector } from "../redux/selectors";
import { IQuizState } from "../redux/interfaces";

import { QuizesList } from "../components";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

const StyledLastQuizzes = styled.div`
  box-sizing: border-box;
  min-width: 0px;
  margin: 10px auto 20px;
  width: 100%;
  max-width: 81rem;
  flex-wrap: wrap;
  height: fit-content;
`;

const StyledSubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-left: 10px;
  margin: 10px 0;
`;

const Home: FC = () => {
  // const { quizes }: IQuizState = useSelector(quizSelector);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchQuizzes());
  // }, []);

  return (
    <>
      <StyledContainer>
        {/* <StyledLastQuizzes>
          <StyledSubTitle>Last viewed quizzes</StyledSubTitle>
          <QuizesList items={quizes} />
        </StyledLastQuizzes> */}
      </StyledContainer>
    </>
  );
};

export default Home;
