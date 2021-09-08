import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { StyledLink } from "./styled-components";

const StyledHeader = styled.header`
  padding: 17px 0;
  text-align: center;
  background-color: #2a9d8f;
`;

const StyledLinkTitle = styled(StyledLink)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLinkTitle to="/">Quiz Time</StyledLinkTitle>
    </StyledHeader>
  );
}

export default Header;
