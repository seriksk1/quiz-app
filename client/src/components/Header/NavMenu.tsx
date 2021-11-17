import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../redux/actions/user";

import { Menu, MenuItem } from "@material-ui/core";
import {
  ExitToApp as ExitIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from "@material-ui/icons";

import { StyledMenuIcon, StyledNavBtn } from "./style";
import { userSelector } from "../../redux/selectors";
import { IUserState } from "../../redux/interfaces";

function NavMenu() {
  const { currentUser }: IUserState = useSelector(userSelector);
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
    history.push(`/profile/${currentUser.username}`);
  };

  const menuItems = [
    { id: 1, name: "View Profile", icon: PersonIcon, func: handleProfile },
    { id: 2, name: "Settings", icon: SettingsIcon, func: handleSettings },
    { id: 3, name: "Sign out", icon: ExitIcon, func: handleLogout },
  ];

  return (
    <>
      <StyledNavBtn id="nav-button" onClick={handleClick}>
        <PersonIcon />
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
        onClose={handleClose}>
        {menuItems &&
          menuItems.map((item) => {
            return (
              <MenuItem key={`${item.id}_${item.name}`} onClick={item.func}>
                <StyledMenuIcon>
                  <item.icon />
                </StyledMenuIcon>
                {item.name}
              </MenuItem>
            );
          })}
      </Menu>
    </>
  );
}

export default NavMenu;
