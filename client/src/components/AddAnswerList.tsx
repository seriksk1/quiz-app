import React, { FC } from "react";

import { AddAnswerItem } from "../components";
import { IAnswer } from "../redux/interfaces";

interface AddAnswerListProps {
  fields?: any;
  items: IAnswer[] | [];
  selected?: boolean;
}

const AddAnswerList: FC<AddAnswerListProps> = ({ fields, selected }) => {
  const onAnswerDelete = (i: number) => {
    fields.remove(i);
  };

  const onAnswerAdd = () => {
    fields.push();
  };

  return (
    <>
      {fields &&
        fields.map((item: IAnswer, i: number) => {
          return (
            <AddAnswerItem
              key={i + 1}
              item={item}
              selected={selected}
              number={i + 1}
              onDelete={onAnswerDelete}
            />
          );
        })}
      <AddAnswerItem
        item={{ _id: "new", text: "Add variant" }}
        addAnswer={onAnswerAdd}
      />
    </>
  );
};

export default AddAnswerList;
