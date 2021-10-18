import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import withAuthShow from "../../hocs/withAuthShow";

import { StyledCreateBtn, StyledNavigation } from "./style";
import NavMenu from "./NavMenu";

interface Props {}

const NavBar: FC<Props> = () => {
  const history = useHistory();

  return (
    <StyledNavigation>
      <StyledCreateBtn onClick={() => history.push("/create")}>
        Create
      </StyledCreateBtn>
      <NavMenu />
    </StyledNavigation>
  );
};

export default withAuthShow(NavBar);
