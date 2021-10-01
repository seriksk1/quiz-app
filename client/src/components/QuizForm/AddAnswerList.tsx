import React, { FC } from "react";
import { useFieldArray } from "react-hook-form";

import { AddAnswerItem } from "../../components";
import { IAnswer, IQuiz } from "../../redux/interfaces";

interface AddAnswerListProps {
  selected?: boolean;
  questionIndex?: number;
}

const AddAnswerList: FC<AddAnswerListProps> = ({ selected, questionIndex }) => {
  const { fields, append, remove } = useFieldArray({
    name: `quiz.${questionIndex}.answers`,
  });

  const onAnswerDelete = (i: number) => {
    remove(i);
  };

  const onAnswerAdd = () => {
    append({ text: "New answer", isRight: false });
  };

  return (
    <>
      {fields.map((item: any, i: number) => {
        return (
          <AddAnswerItem
            key={`${i}`}
            index={i}
            selected={selected}
            onDelete={onAnswerDelete}
            questionIndex={questionIndex}
          />
        );
      })}
      <AddAnswerItem index={questionIndex! + 1000} addAnswer={onAnswerAdd} />
    </>
  );
};

export default AddAnswerList;
