import React, { FC } from "react";
import styled from "styled-components";

const StyledStatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 80px;
  min-height: 50px;
  padding: 0 1.5rem;
`;

const StyledStatisticsName = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  margin-bottom: 10px;
`;

const StyledStatisticsValue = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

interface Props {
  name: string;
  value: number;
}

const StatisticsItem: FC<Props> = ({ name, value }) => {
  return (
    <StyledStatisticsItem>
      <StyledStatisticsName>{name}</StyledStatisticsName>
      <StyledStatisticsValue>{value}</StyledStatisticsValue>
    </StyledStatisticsItem>
  );
};

export default StatisticsItem;
