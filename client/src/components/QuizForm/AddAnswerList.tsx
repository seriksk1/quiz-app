import React, { FC } from "react";
import { useFieldArray } from "react-hook-form";

import { AddAnswerItem } from "../../components";
import MockAnswer from "./MockAnswer";

interface AddAnswerListProps {
  selected?: boolean;
  questionIndex?: number;
}

const AddAnswerList: FC<AddAnswerListProps> = ({ selected, questionIndex }) => {
  const { fields, append, remove } = useFieldArray({
    name: `questions.${questionIndex}.answers`,
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
            key={`${item.id}`}
            index={i}
            selected={selected}
            onDelete={onAnswerDelete}
            questionIndex={questionIndex}
          />
        );
      })}
      <MockAnswer addAnswer={onAnswerAdd} />
    </>
  );
};

export default AddAnswerList;
