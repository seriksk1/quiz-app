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
        items.map((item) => {
          return (
            <AddAnswerItem key={item.id} item={item} selected={selected} />
          );
        })}
      {/* <AddAnswerItem
        key={"fake"}
        item={{ id: "fake", text: "Add variant" }}
        selected={selected}
      /> */}
    </>
  );
};

export default AddAnswerList;
