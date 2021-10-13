import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { logout } from "../redux/actions/user";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { StyledLink } from "./styled-components";
import {
  ExitToApp,
  Person,
  Settings as SettingsIcon,
} from "@material-ui/icons";

const StyledMenuIcon = styled.div`
  display: flex;
  margin-right: 10px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 17px 20px;
  background-color: #2a9d8f;
  filter: drop-shadow(0px 0px 4px #000);

  max-height: 56px;
  box-sizing: border-box;
`;

const StyledLinkTitle = styled(StyledLink)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavBtn = styled(IconButton)`
  padding: 5px 7px !important;

  & svg {
    fill: #fff;
  }
`;

const StyledCreateBtn = styled.button`
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

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  };

  const handleSettings = () => {
    handleClose();
    history.push("/settings");
  };

  const handleProfile = () => {
    handleClose();
    history.push("/profile");
  };

  return (
    <StyledHeader>
      <StyledLinkTitle to="/">Quiz Time</StyledLinkTitle>

      <StyledNavigation>
        <StyledCreateBtn onClick={() => history.push("/create")}>
          Create
        </StyledCreateBtn>

        <StyledNavBtn id="nav-button" onClick={handleClick}>
          <Person />
        </StyledNavBtn>

        <Menu
          id="nav-menu"
          open={open}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          MenuListProps={{
            "aria-labelledby": "nav-button",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfile}>
            <StyledMenuIcon>
              <Person />
            </StyledMenuIcon>
            View Profile
          </MenuItem>
          <MenuItem onClick={handleSettings}>
            <StyledMenuIcon>
              <SettingsIcon />
            </StyledMenuIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <StyledMenuIcon>
              <ExitToApp />
            </StyledMenuIcon>
            Sign out
          </MenuItem>
        </Menu>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default Header;
