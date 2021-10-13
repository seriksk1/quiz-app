import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import {
  MoreVert,
  Edit as EditIcon,
  PlayArrow as PlayIcon,
} from "@material-ui/icons";

const StyledMenuButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledMenuIcon = styled.div`
  display: flex;
  margin-right: 10px;
`;

interface Props {}

const QuizMenu: FC<Props> = ({}) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlay = () => {
    history.push("/quiz");
  };

  const handleEdit = () => {
    history.push("/create");
  };

  return (
    <>
      <StyledMenuButton>
        <IconButton
          id="long-button"
          aria-label="more"
          aria-haspopup="true"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
      </StyledMenuButton>

      <Menu
        id="long-menu"
        open={open}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        onClose={handleClose}
      >
        <MenuItem onClick={handlePlay}>
          <StyledMenuIcon>
            <PlayIcon />
          </StyledMenuIcon>
          Play
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <StyledMenuIcon>
            <EditIcon />
          </StyledMenuIcon>
          Edit
        </MenuItem>
      </Menu>
    </>
  );
};

export default QuizMenu;
