import React, { FC } from "react";

import NavBar from "./NavBar";
import { StyledHeader, StyledLinkTitle } from "./style";

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLinkTitle to="/">Quiz Tim</StyledLinkTitle>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
