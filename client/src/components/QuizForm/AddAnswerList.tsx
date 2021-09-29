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

  const onAnswerDelete = (i: number) => {
    arrayHelpers?.remove(i);
  };

  const onAnswerAdd = () => {
    arrayHelpers?.push({ text: "New answer" });
  };

  const onAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    setFieldValue(
      `questions[${questionIndex}].answers[${i}].text`,
      e.target.value
    );
  };

  return (
    <>
      {values.questions[questionIndex!]?.answers.map(
        (item: IAnswer, i: number) => {
          return (
            <AddAnswerItem
              key={`${i}`}
              item={item}
              selected={selected}
              questionIndex={questionIndex}
              index={i}
              onChange={onAnswerChange}
              onDelete={onAnswerDelete}
            />
          );
        }
      )}
      <AddAnswerItem
        item={{ _id: "new", text: "Add variant" }}
        index={questionIndex! + 1000}
        addAnswer={onAnswerAdd}
      />
    </>
  );
};

export default AddAnswerList;
