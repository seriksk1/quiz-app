import { ArrayHelpers, useFormikContext } from "formik";
import React, { FC } from "react";

import { AddAnswerItem } from "../../components";
import { IAnswer, IQuiz } from "../../redux/interfaces";

interface AddAnswerListProps {
  selected?: boolean;
  arrayHelpers?: ArrayHelpers;
  questionIndex?: number;
}

const AddAnswerList: FC<AddAnswerListProps> = ({
  arrayHelpers,
  selected,
  questionIndex,
}) => {
  const { values } = useFormikContext<IQuiz>();

  const onAnswerDelete = (i: number) => {
    arrayHelpers?.remove(i);
  };

  const onAnswerAdd = () => {
    arrayHelpers?.push({ text: "New answer", isRight: false });
  };

  return (
    <>
      {values.questions[questionIndex!]?.answers.map(
        (item: IAnswer, i: number) => {
          return (
            <AddAnswerItem
              key={`${i}`}
              index={i}
              selected={selected}
              onDelete={onAnswerDelete}
              questionIndex={questionIndex}
            />
          );
        }
      )}
      <AddAnswerItem index={questionIndex! + 1000} addAnswer={onAnswerAdd} />
    </>
  );
};

export default AddAnswerList;
