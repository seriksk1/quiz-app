import React, { FC } from "react";
import styled from "styled-components";
import {
  Control,
  UseFormGetValues,
  UseFormSetValue,
  UseFormRegister,
  useFieldArray,
} from "react-hook-form";

import { AddQuestionItem } from "../../components";
import { StyledButton } from "../../components/styled-components";
import { IQuestion, IQuiz } from "../../redux/interfaces";

const StyledControlBtn = styled(StyledButton)`
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

interface AddQuestionListProps {
  control?: Control;
  register?: UseFormRegister<any>;
  getValues?: UseFormGetValues<any>;
  setValue?: UseFormSetValue<any>;
}

const AddQuestionList: FC<AddQuestionListProps> = ({
  control,
  register,
  getValues,
  setValue,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: "questions",
  });

  const onAddQuestion = () => {
    append({
      text: "New Question",
      answers: [{ text: "New answer", isRight: false }],
    });
  };

  const onDelete = (i: number) => {
    remove(i);
  };

  return (
    <>
      {fields.map((item: any, i: number) => {
        return <AddQuestionItem key={`${i}`} index={i} onDelete={onDelete} />;
      })}
      <StyledControlBtn type="button" onClick={onAddQuestion}>
        Add question
      </StyledControlBtn>
    </>
  );
};

export default AddQuestionList;
