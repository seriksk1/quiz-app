import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import StatisticsItem from "./StatisticsItem";

import { IconButton } from "@material-ui/core";
import { SettingsOutlined as SettingsIcon } from "@material-ui/icons";
import { API_URI, device } from "../../redux/contants";
import { userSelector } from "../../redux/selectors";

const StyledProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.5em;
  box-shadow: 0px 1px 0px 0px #dcdcdc;

  @media ${device.tabletS} {
    flex-direction: column;
  }
`;

const StyledProfileImage = styled.div(
  ({ image }: any) => `

  width: 50px;
  height: 50px;
  background: url(${
    image ? `${API_URI}/${image}` : "https://html5css.ru/howto/img_avatar.png"
  });
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  
  border-radius: 50%;
  margin-right: 20px;
  `
);

const StyledProfileName = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-right: 5px;
`;

const StyledProfileStatistics = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledProfileMainInfo = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {}

const ProfileInfo: FC<Props> = () => {
  const history = useHistory();
  const { avatar } = useSelector(userSelector);
  const { username } = useParams();

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
        <StyledProfileImage image={avatar} />
        <StyledProfileName>{username}</StyledProfileName>

        <IconButton onClick={handleSettings}>
          <SettingsIcon />
        </IconButton>
      </StyledProfileMainInfo>

      {/* <StyledProfileStatistics>
        {statictics.map((item) => {
          return (
            <StatisticsItem
              key={`${item.id}_${item.name}_${item.value}`}
              name={item.name}
              value={item.value}
            />
          );
        })}
      </StyledProfileStatistics> */}
    </StyledProfileInfoContainer>
  );
};

export default ProfileInfo;
