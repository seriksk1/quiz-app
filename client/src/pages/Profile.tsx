import React from "react";
import styled from "styled-components";
import MyQuizzes from "../components/Profile/MyQuizzes";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Profile() {
  return (
    <StyledContainer>
      <MyQuizzes />
    </StyledContainer>
  );
}

export default Profile;
