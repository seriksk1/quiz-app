import React, { FC, useState } from "react";

import { TextField } from "@material-ui/core";
import styled from "styled-components";

import { StyledCreateBtn } from "../components/styled-components";
import { AddAnswerList } from "../components";
import { IQuestion } from "../redux/interfaces";

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
  item: IQuestion;
}

const AddQuestionItem: FC<AddQuestionItemProps> = ({ item }) => {
  return (
    <StyledAddQuestion>
      <StyledInput
        label="Question"
        multiline
        maxRows={4}
        variant="outlined"
        type="text"
        name={`questions[${item}].text`}
      />
      {item.answers ? (
        <>
          <h3>Answers</h3>
          <AddAnswerList items={item.answers} />
        </>
      ) : null}
    </StyledAddQuestion>
  );
};

export default AddQuestionItem;
