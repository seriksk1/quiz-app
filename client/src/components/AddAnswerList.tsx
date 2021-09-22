import React, { FC } from "react";

import { AddAnswerItem } from "../components";
import { IAnswer } from "../redux/interfaces";

interface AddAnswerListProps {
  items: IAnswer[] | [];
  selected?: boolean;
}

const AddAnswerList: FC<AddAnswerListProps> = ({ items, selected }) => {
  return (
    <>
      {items &&
        items.map((item, i) => {
          return (
            <AddAnswerItem
              key={item._id}
              item={item}
              selected={selected}
              number={i + 1}
            />
          );
        })}
    </>
  );
};

export default AddAnswerList;
