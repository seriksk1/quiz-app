import React, { FC } from "react";
import styled from "styled-components";

import { AddQuestionItem } from "../components";

interface AddQuestionListProps {
  items: any[];
}

const AddQuestionList: FC<AddQuestionListProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item) => {
          return <AddQuestionItem key={item} item={item} />;
        })}
    </>
  );
};

export default AddQuestionList;
