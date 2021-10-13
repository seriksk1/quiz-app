import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import StatisticsItem from "./StatisticsItem";

import { IconButton } from "@material-ui/core";
import { SettingsOutlined as SettingsIcon } from "@material-ui/icons";

const StyledProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5em;
  box-shadow: 0px 1px 0px 0px #dcdcdc;
`;

const StyledProfileImage = styled.div`
  width: 50px;
  height: 50px;
  background: url(https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

const StyledProfileName = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-right: 5px;
`;

const StyledProfileStatistics = styled.div`
  display: flex;
  align-items: center;
`;

const StyledProfileMainInfo = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {}

const ProfileInfo: FC<Props> = () => {
  const history = useHistory();
  const owner = localStorage.getItem("username");

  const statictics = [
    { id: 1, name: "Wins", value: 1 },
    { id: 2, name: "Plays", value: 10 },
    { id: 3, name: "Players", value: 100 },
  ];

  const handleSettings = () => {
    history.push("/settings");
  };

  return (
    <StyledProfileInfoContainer>
      <StyledProfileMainInfo>
        <StyledProfileImage />
        <StyledProfileName>{owner}</StyledProfileName>

        <IconButton onClick={handleSettings}>
          <SettingsIcon />
        </IconButton>
      </StyledProfileMainInfo>

      <StyledProfileStatistics>
        {statictics.map((item) => {
          return (
            <StatisticsItem
              key={`${item.id}_${item.name}_${item.value}`}
              name={item.name}
              value={item.value}
            />
          );
        })}
      </StyledProfileStatistics>
    </StyledProfileInfoContainer>
  );
};

export default ProfileInfo;
