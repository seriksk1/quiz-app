import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { TextField } from "@material-ui/core";

import { quizSelector } from "../redux/selectors";
import { IQuestion, IQuizState } from "../redux/interfaces";
import {
  deleteQuestion,
  newAnswer,
  setSelectedCard,
} from "../redux/actions/quizCreation";
import AddAnswerList from "./AddAnswerList";
import AddAnswerItem from "./AddAnswerItem";
import { StyledButton } from "./styled-components";

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

const StyledQuestionControls = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledControlButton = styled(StyledButton)`
  display: flex;
  width: fit-content;
  padding: 10px 15px;
  font-size: 14px;
  margin: 0;

  &:hover {
    filter: none;
    background-color: #e83939;
  }
`;

type CardType = "quiz" | "question" | null;

interface CardProps {
  item?: IQuestion;
  type?: CardType;
  number?: number;
}

const Card: FC<CardProps> = ({ type, item, number }) => {
  const dispatch = useDispatch();
  const { selectedCard }: IQuizState = useSelector(quizSelector);

  const handleSelectToggle = () => {
    dispatch(setSelectedCard(item?._id));
  };

  const handleAddAnswer = () => {
    console.log("add answer with question_id:", item?._id);
    dispatch(newAnswer(item?._id));
  };

  const handleQuestionDelete = () => {
    dispatch(deleteQuestion(item?._id));
    console.log("question delete");
  };

  const isSelected = () => {
    return item?._id === selectedCard;
  };

  return (
    <StyledCard selected={isSelected()} onClick={handleSelectToggle}>
      {isSelected() ? <StyledSelectStrip /> : null}

      <StyledCardTop>
        <StyledInput
          multiline
          type={type}
          selected={isSelected()}
          defaultValue={type === "quiz" ? "New quiz" : `Question ${number}`}
          placeholder={type === "quiz" ? "Quiz" : `Question`}
          inputProps={{
            style: { fontSize: type === "quiz" ? "32px" : "16px" },
          }}
        />
      </StyledCardTop>

      <StyledCardBottom>
        <AddAnswerList items={item?.answers!} selected={isSelected()} />

        {isSelected() && type !== "quiz" ? (
          <>
            <AddAnswerItem
              item={{ _id: "new", text: "Add variant" }}
              addAnswer={handleAddAnswer}
            />
            <StyledQuestionControls>
              <StyledControlButton onClick={handleQuestionDelete}>
                Delete
              </StyledControlButton>
            </StyledQuestionControls>
          </>
        ) : null}
      </StyledCardBottom>
    </StyledCard>
  );
};

export default Card;
