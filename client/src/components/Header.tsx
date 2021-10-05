import React, { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ExitToApp, Person, AddBoxOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import { StyledLink } from "./styled-components";
import { logout } from "../redux/actions/user";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 17px 20px;
  background-color: #2a9d8f;
  filter: drop-shadow(0px 0px 4px #000);
`;

const StyledLinkTitle = styled(StyledLink)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const StyledNavigation = styled.div``;

const StyledNavBtn = styled(IconButton)`
  padding: 5px 7px !important;

  & svg {
    fill: #fff;
  }
`;

const Header: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <StyledLinkTitle to="/">Quiz Time</StyledLinkTitle>

      <StyledNavigation>
        <StyledNavBtn>
          <AddBoxOutlined />
        </StyledNavBtn>

        <StyledNavBtn>
          <Person />
        </StyledNavBtn>

        <StyledNavBtn onClick={handleLogout}>
          <ExitToApp />
        </StyledNavBtn>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;
