import styled from "styled-components";

export const StyledQuizzesListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  box-shadow: rgb(0 0 0 / 15%) 0px 0px 0.5rem 0px;
  border-radius: 0.25rem;
  cursor: pointer;

  margin: 0 7px 15px;

  &:hover {
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 0.5rem 0px;
  }
`;

export const StyledQuizPreview = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-image: url("https://images-cdn.kahoot.it/4b0d02b9-f99c-4069-bd00-6ef409b1f1dd?auto=webp&width=350");
  background-position: center;
  background-size: cover;
`;

export const StyledText = styled.p`
  position: absolute;
  bottom: 0px;
  right: 0;
  margin: 10px;
  padding: 3px 9px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  font-size: 15px;
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

export const StyledQuizDescription = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const StyledCreatorImage = styled.div`
  margin: 0 10px 0 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: url(https://images-cdn.kahoot.it/359229c4-9119-443f-8cb0-cacf34d209cb?auto=webp&width=32&crop=800,800,x0,y0);
`;

export const StyledAboutQuiz = styled.div``;

export const StyledQuizName = styled.h4`
  font-size: 18px;
  margin: 0;
`;

export const StyledAboutQuizCreator = styled.div`
  display: flex;
`;

export const StyledQuizCreator = styled.div`
  color: rgb(110, 110, 110);
  font-size: 12px;
  white-space: nowrap;
  padding: 0px 5px 0px 0px;
`;

export const StyledPlayers = styled.div`
  color: rgb(110, 110, 110);
  font-size: 12px;
  white-space: nowrap;
  padding: 0px 5px 0px 0px;

  &:last-of-type {
    padding-left: 5px;
  }
`;

export const StyledQuizMenu = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
`;
