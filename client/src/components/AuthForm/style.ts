import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const StyledSubmitBtn = styled.button`
  width: fit-content;
  margin: 0px 10px 25px;
  padding: 10px 15px;
  background-color: #309d8f;
  cursor: pointer;
  border-radius: 15px;
  border: none;

  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #25796e;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled(TextField)`
  margin-bottom: 25px !important;

  & input {
    font-size: 16px;
    padding: 12px 15px;
  }
`;
