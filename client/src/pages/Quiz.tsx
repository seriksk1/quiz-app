import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { IQuizState } from "../redux/reducers/quiz";
import { quizSelector } from "../redux/selectors";

import { Button, Question } from "../components";
import { StyledTitle } from "../components/styled-components";
import { setNextQuestion } from "../redux/actions/quiz";

interface QuizProps {}

const StyledSecondaryText = styled.p`
  font-size: 16px;
  margin: 0;
  color: #a5a5a5;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const StyledNavDiv = styled.div`
  display: flex;
`;

const Quiz: FC<QuizProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentQuiz, currentQuestion }: IQuizState =
    useSelector(quizSelector);
  const [questionIndex, setQuestionIndex] = useState(0);

  const isNotEnd = () => {
    return currentQuiz!.questions.length > questionIndex + 1;
  };

  const handleNextQuestion = () => {
    if (currentQuestion?.isAnswered) {
      if (isNotEnd()) {
        setQuestionIndex((prev) => prev + 1);
        dispatch(setNextQuestion(questionIndex + 1));
      } else {
        history.push("/results");
      }
    }
  };

  const handlePrevQuestion = () => {
    console.log("Previous question");
  };

  return (
    <>
      <StyledTitle>{currentQuiz?.name}</StyledTitle>
      <Question />
      <StyledBottomContainer>
        <StyledSecondaryText>
          Question {questionIndex + 1} of {currentQuiz?.questions.length}
        </StyledSecondaryText>
        <StyledNavDiv>
          <Button onClick={handlePrevQuestion} Icon={NavigateBeforeIcon} />
          <Button onClick={handleNextQuestion} Icon={NavigateNextIcon} />
        </StyledNavDiv>
      </StyledBottomContainer>
    </>
  );
};

export default Quiz;
