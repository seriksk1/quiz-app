import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  background-color: #2a9d8f;
`;

function Header() {
  return <StyledHeader>Quiz Time</StyledHeader>;
}

export default Header;
