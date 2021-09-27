import React, { FC } from "react";
import styled from "styled-components";

import { Card } from "../components";
import { StyledButton } from "../components/styled-components";
import { IQuestion } from "../redux/interfaces";

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
  items: IQuestion[];
}

const AddQuestionList: FC<AddQuestionListProps> = ({ items }) => {
  const handleAddQuestion = () => {
    console.log("add question");
    // dispatch(newQuestion(quizToCreate?._id));
  };

  return (
    <>
      {items &&
        items.map((item: IQuestion | undefined, i: number) => {
          return <Card key={i + 1} item={item} number={i + 1} />;
        })}
      <StyledControlBtn type="button" onClick={handleAddQuestion}>
        Add question
      </StyledControlBtn>
    </>
  );
};

export default AddQuestionList;
