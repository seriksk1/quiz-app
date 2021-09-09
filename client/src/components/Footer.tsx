import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  background-color: #2a9d8f;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
