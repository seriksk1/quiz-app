import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { StyledLink } from "../styled-components";

export const StyledMenuIcon = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 17px 20px;
  background-color: #2a9d8f;
  filter: drop-shadow(0px 0px 4px #000);

  max-height: 56px;
  box-sizing: border-box;
`;

export const StyledLinkTitle = styled(StyledLink)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNavBtn = styled(IconButton)`
  padding: 5px 7px !important;

  & svg {
    fill: #fff;
  }
`;

export const StyledCreateBtn = styled.button`
  height: 30px;
  margin-right: 10px;
  padding: 0 15px !important;
  border: 2px solid;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;

  font-size: 14px;
  font-weight: 700;
  color: #309d8f;
  cursor: pointer;

  &:hover {
    transition: 0.1s ease-in;
    background-color: #309d8f !important;
    color: #fff !important;
  }
`;
