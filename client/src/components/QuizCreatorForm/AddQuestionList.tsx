import React, { FC } from "react";
import styled from "styled-components";
import { useFieldArray } from "react-hook-form";

import { AddQuestionItem } from ".";
import { StyledButton } from "../styled-components";

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

interface AddQuestionListProps {}

const AddQuestionList: FC<AddQuestionListProps> = () => {
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
        return (
          <AddQuestionItem key={`${item.id}`} index={i} onDelete={onDelete} />
        );
      })}
      <StyledControlBtn type="button" onClick={onAddQuestion}>
        Add question
      </StyledControlBtn>
    </>
  );
};

export default AddQuestionList;
