import React, { FC } from "react";

import { TextField } from "@material-ui/core";
import styled from "styled-components";

import { StyledButton } from "../components/styled-components";

const StyledAddQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px 0 20px;
  padding: 20px 30px 30px;
  border: 1px dashed #000;
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

const StyledCreateBtn = styled(StyledButton)`
  display: flex;
  padding: 10px;
  width: fit-content;

  font-size: 28px;
  padding: 0 8px;
  margin: 0 auto;
  border-radius: 50%;

  &:hover {
    filter: none;
    background-color: #312e2e;
  }
`;

const AddQuestionItem: FC<AddQuestionItemProps> = ({ item }) => {
  const handleAddAnswer = (e: React.FormEvent) => {
    e.preventDefault();
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
      <h3>Answers</h3>
      <StyledCreateBtn onClick={handleAddAnswer}>+</StyledCreateBtn>
    </StyledAddQuestion>
  );
};

export default AddQuestionItem;
