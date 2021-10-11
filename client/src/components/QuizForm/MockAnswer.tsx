import React, { FC } from "react";

import { FormInput, FormCheckBox } from "../";
import { StyledAddAnswer } from "./style";

interface MockAnswerProps {
  selected?: boolean;
  index?: number;
  questionIndex?: number;
  addAnswer?: () => void;
}

const MockAnswer: FC<MockAnswerProps> = ({
  selected,
  index,
  questionIndex,
  addAnswer,
}) => {
  return (
    <StyledAddAnswer>
      <FormCheckBox
        type="checkbox"
        selected={selected}
        name={`questions[${questionIndex}].answers[${index}].isRight`}
      />

      <FormInput
        type="text"
        placeholder={`Answer`}
        name={`questions[${questionIndex}].answers[${index}].text`}
        maxRows={4}
        selected={selected}
        onClick={addAnswer}
      />
    </StyledAddAnswer>
  );
};

export default MockAnswer;
