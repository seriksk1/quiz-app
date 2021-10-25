import styled from "styled-components";
import { device } from "../../redux/contants";

export const StyledQuizzesListItem = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: rgb(0 0 0 / 50%) 0px 0px 0.5rem 0px;
  border-radius: 0.25rem;
  cursor: pointer;
  background: rgb(255, 255, 255);
  flex: 0 0 100%;

  max-width: 100%;
  min-width: auto;
  width: 100%;
  margin: 0px;

  &:hover {
  }
`;

export const StyledQuizItemWrapper = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;
  width: 20%;
  min-width: 270px;

  @media ${device.desktopL} {
    width: 25%;
  }

  @media ${device.laptopL} {
    width: 33.3%;
  }

  @media ${device.laptopS} {
    width: 50%;
  }

  @media ${device.tabletS} {
    width: 100%;
  }
`;

export const StyledQuizPreview = styled.div`
  position: relative;
  width: 100%;
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

export const StyledCreatorImage = styled.div(
  ({ image }: any) => `
  margin: 0 10px 0 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: url(${image});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

}
`
);

export const StyledAboutQuiz = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 60%;
  flex-direction: column;
  max-height: 3.5rem;
`;

export const StyledQuizName = styled.h4`
  display: inline-block;
  max-height: 2.25rem;
  overflow: hidden;
  line-height: 1.18rem;
  font-weight: 700;
  color: rgb(51, 51, 51);
  width: 100%;
  flex: 1 1 0%;
  text-overflow: ellipsis;
  align-self: flex-start;
  font-size: 18px;
  text-decoration: none;
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
