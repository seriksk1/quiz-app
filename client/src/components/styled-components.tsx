import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const StyledContainer = styled.div`
  padding: 10px 0 50px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledAnswerItem = styled.div`
  width: 85%;
  max-width: 300px;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 15px;
  }
`;

export const StyledButton = styled.button(
  ({ color }: any) => `
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  background-color: ${color || "#2a9d8f"} ;

  margin: 0;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 2px 2px black);
  }
`
);

export const StyledIconContainer = styled.div`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    color: gray;
  }
`;

export const StyledQuizItem = styled.div`
  width: 80%;
  max-width: 300px;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: #2a9d8f;
  margin: 15px 0;
  border-radius: 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 20px;
  color: #fff;

  &:hover {
    background-color: #28776e;
  }
`;
