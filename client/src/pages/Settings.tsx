import React from "react";
import { Link } from "react-router-dom";
import { AvatarForm, ProfileInfoForm } from "../components/Settings";
import { device } from "../redux/contants";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
`;

const StyledPanelsWrapper = styled.div`
  display: flex;

  @media ${device.tabletL} {
    flex-wrap: wrap;
  }
`;

const StyledTabListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 20px;

  &::after {
    content: "";
    border-bottom: 1px solid #000;
    margin-top: 10px;
    width: 100%;
  }
`;

const StyledTabList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const StyledTabListItem = styled(Link)`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: gray;
  margin: 0 15px 0 0;

  &:hover {
    color: #000;
  }
`;

function Settings() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit form");
  };

  return (
    <StyledContainer>
      <h1>Settings</h1>

      <StyledTabListWrapper>
        <StyledTabList>
          <StyledTabListItem to="/settings/user-info">
            User info
          </StyledTabListItem>

          <StyledTabListItem to="/settings/change-password">
            Change password
          </StyledTabListItem>
        </StyledTabList>
      </StyledTabListWrapper>

      <StyledPanelsWrapper>
        <ProfileInfoForm name="User Information" onSubmit={handleSubmit} />
        <AvatarForm name="Avatar" onSubmit={handleSubmit} />
      </StyledPanelsWrapper>
    </StyledContainer>
  );
}

export default Settings;
