import React, { FC, useState } from "react";

import { TextField } from "@material-ui/core";
import styled from "styled-components";

import { StyledCreateBtn } from "../components/styled-components";
import { AddAnswerList } from "../components";

const StyledAddQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0 20px;
  padding: 20px 30px 30px;
  border: 1px dashed #000;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledInput = styled(TextField)`
  width: 100%;
  margin: 20px 0;

  & input {
    padding: 10px;
  }
`;

interface AddQuestionItemProps {
  item: any;
}

const AddQuestionItem: FC<AddQuestionItemProps> = ({ item }) => {
  const [answers, setAnswers] = useState<any>([]);

  const handleAddAnswer = (e: React.FormEvent) => {
    e.preventDefault();

    setAnswers((prev: any) => [...prev, {}]);
  };

  return (
    <StyledAddQuestion>
      <StyledInput
        label="Question"
        multiline
        maxRows={4}
        variant="outlined"
        type="text"
        name=""
        id=""
      />
      {answers.length ? (
        <>
          <h3>Answers</h3>
          <AddAnswerList items={answers} />
        </>
      ) : null}
      <StyledCreateBtn onClick={handleAddAnswer}>+</StyledCreateBtn>
    </StyledAddQuestion>
  );
};

export default AddQuestionItem;
