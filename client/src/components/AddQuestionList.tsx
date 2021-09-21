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
        items.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
    </>
  );
};

export default AddQuestionList;
