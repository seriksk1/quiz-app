import React, { FC } from "react";

import { Answer } from "../redux/types";
import AnswerItem from "./AnswerItem";

interface AnswersListProps {
  items: Answer[];
}

const AnswersList: FC<AnswersListProps> = ({ items }) => {
  return (
    <div>
      {items &&
        items.map((item) => {
          return <AnswerItem key={item.id} item={item} />;
        })}
    </div>
  );
};

export default AnswersList;
