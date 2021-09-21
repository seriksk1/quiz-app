import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { TextField } from "@material-ui/core";
import AddAnswerList from "./AddAnswerList";

import { quizSelector } from "../redux/selectors";
import { IQuestion, IQuizState } from "../redux/interfaces";
import { setSelectedCard } from "../redux/actions/quizCreation";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 768px;
  width: 98%;

  box-sizing: border-box;
  background-color: #f1f1f1;
  border: 1px solid #dadce0;
  border-radius: 8px;

  padding: 30px 25px;
  margin-top: 20px;

  box-shadow: ${({ selected }: any) =>
    selected ? "0 0 2px rgb(0 0 0 / 12%), 0 2px 4px rgb(0 0 0 / 24%)" : "none"};

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

const StyledSelectStrip = styled.div`
  width: 7px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -1px;
  background-color: rgb(103 58 183);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const StyledInput = styled(TextField)`
  width: ${({ type }: any) => (type === "quiz" ? "100%" : "50%")};

  & :before {
    display: ${({ selected }: any) => (selected ? "flex" : "none")};
  }

  & input {
    font-size: 16px;
  }

  & textarea {
    line-height: 120%;
  }
`;

const StyledCardTop = styled.div`
  width: 100%;
`;

const StyledCardBottom = styled.div`
  width: 100%;
  padding-top: 16px;
`;

type CardType = "quiz" | "question" | null;

interface CardProps {
  item?: IQuestion;
  type?: CardType;
}

const Card: FC<CardProps> = ({ type, item }) => {
  const dispatch = useDispatch();
  const { selectedCard }: IQuizState = useSelector(quizSelector);

  const handleSelectToggle = () => {
    dispatch(setSelectedCard(item?.id));
  };

  const isSelected = () => {
    return item?.id === selectedCard;
  };

  return (
    <StyledCard selected={isSelected()} onClick={handleSelectToggle}>
      {isSelected() ? <StyledSelectStrip /> : null}

      <StyledCardTop>
        <StyledInput //Question
          multiline
          type={type}
          selected={isSelected()}
          defaultValue={type === "quiz" ? "New quiz" : `Question ${item?.id}`}
          placeholder={type === "quiz" ? "Quiz" : `Question`}
          inputProps={{
            style: { fontSize: type === "quiz" ? "32px" : "16px" },
          }}
        />
      </StyledCardTop>

      <StyledCardBottom>
        <AddAnswerList items={item?.answers!} selected={isSelected()} />
      </StyledCardBottom>
    </StyledCard>
  );
};

export default Card;
