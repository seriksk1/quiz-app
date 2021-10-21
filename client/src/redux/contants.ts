// Quiz

export const ACTION_QUIZ = {
  START_QUIZ: "START_QUIZ",
  SET_CURRENT_QUIZ: "SET_CURRENT_QUIZ",

  SET_QUIZZES: "SET_QUIZZES",
  SET_NEXT_QUESTION: "SET_NEXT_QUESTION",
  SET_IS_ANSWERED: "SET_IS_ANSWERED",
  CLEAR_QUIZ: "CLEAR_QUIZ",

  WRITE_ANSWER: "WRITE_ANSWER",

  //--------------- Quiz creating ----------------

  CREATE_QUIZ: "CREATE_QUIZ",
  SET_SELECTED_CARD: "SET_SELECTED_CARD",

  NEW_QUESTION: "NEW_QUESTION",
  NEW_ANSWER: "NEW_ANSWER",

  ADD_ANSWER: "ADD_ANSWER",
  ADD_QUESTION: "ADD_QUESTION",

  UPDATE_ANSWER: "UPDATE_ANSWER",
  UPDATE_QUESTION: "UPDATE_QUESTION",

  DELETE_ANSWER: "DELETE_ANSWER",
  DELETE_QUESTION: "DELETE_QUESTION",

  CREATE_NEW_QUIZ: "CREATE_NEW_QUIZ",
};

// User

export const ACTION_USER = {
  REGISTERED: "REGISTERED",
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT",

  SET_USER: "SET_USER",
  SET_AVATAR: "SET_AVATAR",
  ADD_ANSWER: "USER_ADD_ANSWER",
  NEXT_QUESTION: "NEXT_QUESTION",
  FINISH_QUIZ: "FINISH_QUIZ",
  SET_RESULTS: "SET_RESULTS",
  CLEAR_ANSWERS: "CLEAR_ANSWERS",
};

export const TIME_TO_ANSWER = 10;

// For media queries
const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "600px",
  tabletM: "640px",
  tabletL: "768px",
  laptopS: "1024px",
  laptopM: "1440px",
  laptopL: "1600px",
  desktop: "1920px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `(max-width: ${deviceSize.mobileS})`,
  mobileM: `(max-width: ${deviceSize.mobileM})`,
  mobileL: `(max-width: ${deviceSize.mobileL})`,
  tabletS: `(max-width: ${deviceSize.tabletS})`,
  tabletM: `(max-width: ${deviceSize.tabletM})`,
  tabletL: `(max-width: ${deviceSize.tabletL})`,
  laptopS: `(max-width: ${deviceSize.laptopS})`,
  laptopM: `(max-width: ${deviceSize.laptopS})`,
  laptopL: `(max-width: ${deviceSize.laptopL})`,
  desktop: `(max-width: ${deviceSize.desktop})`,
  desktopL: `(max-width: ${deviceSize.desktop})`,
};
