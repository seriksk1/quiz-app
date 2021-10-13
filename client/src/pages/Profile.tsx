import React from "react";
import styled from "styled-components";
import MyQuizzes from "../components/Profile/MyQuizzes";
import ProfileInfo from "../components/Profile/ProfileInfo";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
`;

function Profile() {
  return (
    <StyledContainer>
      <ProfileInfo />
      <MyQuizzes />
    </StyledContainer>
  );
}

export default Profile;
