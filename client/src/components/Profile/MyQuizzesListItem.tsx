import React, { FC } from "react";
import { IQuiz } from "../../redux/interfaces";

import QuizMenu from "./QuizMenu";

import {
  StyledQuizzesListItem,
  StyledQuizItemWrapper,
  StyledQuizDescription,
  StyledQuizPreview,
  StyledText,
  StyledCreatorImage,
  StyledAboutQuiz,
  StyledQuizName,
  StyledAboutQuizCreator,
  StyledQuizCreator,
  StyledPlayers,
} from "./style";

interface Props {
  item: IQuiz;
}

const MyQuizzesListItem: FC<Props> = ({ item }) => {
  return (
    <StyledQuizItemWrapper>
      <StyledQuizzesListItem>
        <StyledQuizPreview>
          <StyledText>{item.questions.length} questions</StyledText>
        </StyledQuizPreview>

        <StyledQuizDescription>
          <StyledCreatorImage />

          <StyledAboutQuiz>
            <StyledQuizName>{item.name}</StyledQuizName>
            <StyledAboutQuizCreator>
              <StyledQuizCreator>{item.owner}</StyledQuizCreator>
              <span>*</span>
              <StyledPlayers>{10}k players</StyledPlayers>
            </StyledAboutQuizCreator>
          </StyledAboutQuiz>

          <QuizMenu item={item} />
        </StyledQuizDescription>
      </StyledQuizzesListItem>
    </StyledQuizItemWrapper>
  );
};

export default MyQuizzesListItem;
