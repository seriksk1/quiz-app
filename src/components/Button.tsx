import React, { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  Icon: any;
  onClick: any;
}

const StyledIconContainer = styled.div`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    color: gray;
  }
`;

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
