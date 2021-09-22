import React, { FC } from "react";

import { Card } from "../components";
import { IQuestion } from "../redux/interfaces";

interface AddQuestionListProps {
  items: IQuestion[];
}

const AddQuestionList: FC<AddQuestionListProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, i) => {
          return <Card key={item._id} item={item} number={i + 1} />;
        })}
    </>
  );
};

export default AddQuestionList;
