import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import withAuthShow from "../../hocs/withAuthShow";
import { clearQuiz } from "../../redux/actions/quiz";
import { StyledCreateBtn, StyledNavigation } from "./style";
import NavMenu from "./NavMenu";

interface Props {}

const NavBar: FC<Props> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goToCreateQuiz = () => {
    dispatch(clearQuiz());
    history.push("/create");
  };

  return (
    <StyledNavigation>
      <StyledCreateBtn onClick={goToCreateQuiz}>Create</StyledCreateBtn>
      <NavMenu />
    </StyledNavigation>
  );
};

export default withAuthShow(NavBar);
