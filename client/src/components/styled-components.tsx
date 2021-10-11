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

export const StyledCreateBtn = styled(StyledButton)`
  display: flex;
  padding: 10px;
  width: fit-content;

  font-size: 28px;
  padding: 0 8px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 50%;

  &:hover {
    filter: none;
    background-color: #312e2e;
  }
`;

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
  position: relative;
  cursor: pointer;
  display: block;
  min-width: 200px;
  width: 100%;
  max-width: 39rem;
  padding-bottom: 44%;
  border-radius: 0.625rem;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px 0px;
  background: url(https://files-cdn.kahoot.it/email-assets/Banners/collectionbox/SW_Discover.jpg?auto=webp&width=1000)
    center center / cover no-repeat;
`;
