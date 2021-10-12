import React, { FC } from "react";
import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { IMyQuiz } from "./MyQuizzes";
import {
  StyledQuizzesListItem,
  StyledQuizDescription,
  StyledQuizPreview,
  StyledText,
  StyledCreatorImage,
  StyledAboutQuiz,
  StyledQuizName,
  StyledAboutQuizCreator,
  StyledQuizCreator,
  StyledPlayers,
  StyledQuizMenu,
} from "./style";

interface Props {
  item: IMyQuiz;
}

const MyQuizzesListItem: FC<Props> = ({ item }) => {
  return (
    <StyledQuizzesListItem>
      <StyledQuizPreview>
        <StyledText>{item.questionsCount} questions</StyledText>
      </StyledQuizPreview>

      <StyledQuizDescription>
        <StyledCreatorImage />

        <StyledAboutQuiz>
          <StyledQuizName>Title</StyledQuizName>
          <StyledAboutQuizCreator>
            <StyledQuizCreator>Teacher</StyledQuizCreator>
            <span>*</span>
            <StyledPlayers>{item.players}k players</StyledPlayers>
          </StyledAboutQuizCreator>
        </StyledAboutQuiz>

        <StyledQuizMenu>
          <IconButton>
            <MoreVert />
          </IconButton>
        </StyledQuizMenu>
      </StyledQuizDescription>
    </StyledQuizzesListItem>
  );
};

export default MyQuizzesListItem;
