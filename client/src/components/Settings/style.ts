import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { API_URI, device } from "../../redux/contants";

export const StyledSubmitBtn = styled.button`
  width: fit-content;
  min-width: 80px;

  padding: 10px 15px;
  background-color: #309d8f;
  cursor: pointer;
  border-radius: 15px;
  border: none;

  font-size: 14px;
  color: #fff;

  margin: 10px auto;

  &:hover {
    background-color: #25796e;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px none rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 5px 0px;

  padding: 20px 10px;

  min-width: 300px;
  width: 100%;

  @media ${device.mobileM} {
    min-width: 250px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 20px 15px 0;
  width: 100%;
  max-width: 600px;
  height: fit-content;

  @media ${device.tabletL} {
    max-width: 100%;
    width: 100%;

    margin: 15px 0;
  }

  &:last-of-type {
    margin: 15px 0;
  }
`;

export const StyledInput = styled(TextField)`
  margin-bottom: 10px !important;
  max-width: 100%;

  & input {
    font-size: 16px;
    padding: 12px 15px;
  }
`;

export const StyledTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

export const AvatarImage = styled.div(
  ({ image }: any) => `
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: gray;
  margin: 15px 0;

  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  
  background-image: url(${image});
`
);
