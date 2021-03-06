import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { setCurrentQuiz, startQuiz } from "../../redux/actions/quiz";
import { IQuiz, IUserState } from "../../redux/interfaces";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import {
  MoreVert,
  Edit as EditIcon,
  PlayArrow as PlayIcon,
} from "@material-ui/icons";
import { userSelector } from "../../redux/selectors";

const StyledMenuButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledMenuIcon = styled.div`
  display: flex;
  margin-right: 10px;
`;

interface Props {
  item: IQuiz;
}

const QuizMenu: FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { currentUser }: IUserState = useSelector(userSelector);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlay = () => {
    dispatch(startQuiz(item));
    history.push("/quiz");
  };

  const handleEdit = () => {
    dispatch(setCurrentQuiz(item));
    history.push(`/edit/${item._id}`);
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
          onClick={handleClick}>
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
        onClose={handleClose}>
        <MenuItem onClick={handlePlay}>
          <StyledMenuIcon>
            <PlayIcon />
          </StyledMenuIcon>
          Play
        </MenuItem>

        {item.owner === currentUser.username && (
          <MenuItem onClick={handleEdit}>
            <StyledMenuIcon>
              <EditIcon />
            </StyledMenuIcon>
            Edit
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default QuizMenu;
