import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { StyledButton } from "../styled-components";

export const StyledCard = styled.div`
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

export const StyledSelectStrip = styled.div`
  width: 7px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -1px;
  background-color: rgb(103 58 183);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const StyledInput = styled(TextField)`
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

export const StyledCardTop = styled.div`
  width: 100%;
`;

export const StyledCardBottom = styled.div`
  width: 100%;
  padding-top: 16px;
`;

export const StyledQuestionControls = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledControlButton = styled(StyledButton)`
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
