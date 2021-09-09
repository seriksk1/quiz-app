import React, { FC } from "react";
import styled from "styled-components";

import { StyledIconContainer } from "./styled-components";

interface ButtonProps {
  Icon: any;
  onClick: any;
}

const Button: FC<ButtonProps> = ({ Icon, onClick }) => {
  const StyledIcon = styled(Icon)`
    width: 35px !important;
    height: 35px !important;
  `;

  return (
    <StyledIconContainer>
      <StyledIcon onClick={onClick} />
    </StyledIconContainer>
  );
};

export default Button;
