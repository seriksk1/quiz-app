import React, { FC } from "react";
import styled from "styled-components";

import { AddAnswerItem } from "../components";

interface AddAnswerListProps {
  items: any[];
}

const AddAnswerList: FC<AddAnswerListProps> = ({ items }) => {
  return (
    <div>
      {items &&
        items.map((item) => {
          return <AddAnswerItem item={item} />;
        })}
    </div>
  );
};

export default AddAnswerList;
