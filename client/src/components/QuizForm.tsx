import React, { FC } from "react";
import { useFormikContext, Formik, Form, Field, FormikHelpers } from "formik";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { StyledButton } from "../components/styled-components";
import { AddQuestionList, Card } from "../components";

import { newQuestion, startCreateQuiz } from "../redux/actions/quizCreation";
import { quizSelector } from "../redux/selectors";
import { IQuiz, IQuizState } from "../redux/interfaces";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSubmitBtn = styled.button`
  width: fit-content;
  margin: 0px 10px 25px;
  padding: 10px 15px;
  background-color: #309d8f;
  cursor: pointer;
  border-radius: 15px;
  border: none;

  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #25796e;
  }
`;

const StyledControls = styled.div`
  display: flex;
  justify-content: center;
`;

interface QuizFormProps {}

const QuizForm: FC<QuizFormProps> = ({}) => {
  const dispatch = useDispatch();
  const formik = useFormikContext();
  const { quizToCreate }: IQuizState = useSelector(quizSelector);

  return (
    <>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(formik) => (
          <Form>
            <Column>
              <Card
                onChange={formik.handleChange}
                type="quiz"
                item={undefined}
              />
              <AddQuestionList items={quizToCreate?.questions!} />
            </Column>

            <StyledControls>
              <StyledSubmitBtn type="submit">Create quiz</StyledSubmitBtn>
            </StyledControls>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default QuizForm;
