import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

export const SubmitButton = styled.button`
  min-width: 100px;
  width: fit-content;
  margin: 0px 10px 25px;
  padding: 10px 15px;
  background-color: red;
  cursor: pointer;
  border-radius: 5px;
  border: none;

  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #25796e;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Field = styled(TextField)`
  & input {
    font-size: 16px;
    width: 280px;
  }
`;

export const FieldItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(&:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 15px 0 0;
  color: #f92929;
`;

export const HelperLink = styled(Link)`
  font-size: 16px;
  margin: 15px 0;

  &:hover {
    opacity: 0.7;
  }
`;
