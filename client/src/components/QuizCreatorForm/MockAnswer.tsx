import React, { FC } from "react";

import { FormInput, FormCheckBox } from ".";
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
      <FormCheckBox type="checkbox" selected={selected} name={`mockAnswer`} />

      <FormInput
        type="text"
        placeholder={`Answer`}
        name={`mockAnswer`}
        maxRows={4}
        selected={selected}
        onClick={addAnswer}
        value={""}
      />
    </StyledAddAnswer>
  );
};

export default MockAnswer;
