import React, { FC } from "react";
import styled from "styled-components";

import { Formik, Form, FieldArray } from "formik";
import { AddQuestionList, AddQuestionItem } from "../";

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
  return (
    <>
      <Formik
        initialValues={{ name: "", questions: [] }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <Column>
              <AddQuestionItem
                onChange={formik.handleChange}
                type="quiz"
                item={undefined}
              />
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
        )}
      </Formik>
    </>
  );
};

export default QuizForm;
