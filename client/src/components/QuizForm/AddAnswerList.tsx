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
  const { values, setFieldValue } = useFormikContext<IQuiz>();

  const onAnswerDelete = (i: number) => {};

  const onAnswerAdd = () => {
    arrayHelpers?.push({ text: "New answer" });
  };

  return (
    <>
      {values.questions[questionIndex!]?.answers.map(
        (item: IAnswer, i: number) => {
          return (
            <AddAnswerItem
              key={`${new Date()}_${i}`}
              item={item}
              selected={selected}
              questionIndex={questionIndex}
              index={i}
              onDelete={() => {
                arrayHelpers?.remove(i);
              }}
            />
          );
        }
      )}
      <AddAnswerItem
        item={{ _id: "new", text: "Add variant" }}
        addAnswer={onAnswerAdd}
      />
    </>
  );
};

export default AddAnswerList;
