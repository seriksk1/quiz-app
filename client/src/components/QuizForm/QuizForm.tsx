import React, { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Formik, Form, FieldArray } from "formik";
import { AddQuestionList, AddQuestionItem } from "../";
import { IQuiz } from "../../redux/interfaces";
import { createQuiz } from "../../redux/actions/quizCreation";

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

const QuizForm: FC<QuizFormProps> = () => {
  const dispatch = useDispatch();

  const handleSubmit = (quiz: IQuiz) => {
    dispatch(createQuiz(quiz));
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", questions: [] }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Column>
            <AddQuestionItem type="quiz" />

            <FieldArray name="questions">
              {(arrayHelpers) => (
                <AddQuestionList arrayHelpers={arrayHelpers} />
              )}
            </FieldArray>
          </Column>

          <StyledControls>
            <StyledSubmitBtn type="submit">Create quiz</StyledSubmitBtn>
          </StyledControls>
        </Form>
      </Formik>
    </>
  );
};

export default QuizForm;
