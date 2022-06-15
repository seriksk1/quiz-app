export const API_URI = process.env.REACT_APP_URI;

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
  SET_USER_PROFILE: "SET_USER_PROFILE",

  ADD_ANSWER: "USER_ADD_ANSWER",
  NEXT_QUESTION: "NEXT_QUESTION",
  FINISH_QUIZ: "FINISH_QUIZ",
  SET_RESULTS: "SET_RESULTS",
  CLEAR_ANSWERS: "CLEAR_ANSWERS",
};

export const ACTION_NOTIFICATIONS = {
  SET_NOTIFICATION: "SET_MESSAGE",
  CLEAN: "CLEAN_NOTIFICATION",
};

export const TOAST_OPTION = {
  QUIZ: {
    CREATE: {
      type: "success",
      message: "Quiz has been created successfully!",
    },
    ERROR_CREATE: {
      type: "error",
      message: "Error! Quiz hasn't been created!",
    },
    REMOVE: {
      type: "success",
      message: "Quiz has been removed successfully!",
    },
    ERROR_REMOVE: {
      type: "error",
      message: "Error! Quiz hasn't been removed!",
    },
    CHANGE: {
      type: "success",
      message: "Quiz status has been changed successfully!",
    },
    ERROR_CHANGE: {
      type: "error",
      message: "Error! Quiz status hasn't changed!",
    },
  },
  SETTINGS: {
    AVATAR_CHANGE: {
      type: "success",
      message: "Your avatar has been changed successfully!",
    },
    AVATAR_CHANGE_ERROR: {
      type: "error",
      message: "Your avatar hasn't been changed!",
    },
  },
  USER: {
    LOGIN_SUCCESS: {
      type: "info",
      message: "You are logged in!",
    },
    LOGIN_NOT_FOUND: {
      type: "error",
      message: "You are not registered yet!",
    },
    LOGIN_WRONG_PASSWORD: {
      type: "error",
      message: "Wrong password!",
    },
    REGISTER_SUCCESS: {
      type: "success",
      message: "Registration success!",
    },
    REGISTER_ERROR: {
      type: "error",
      message: "User already exists!",
    },
    LOGOUT: {
      type: "info",
      message: "You are logged out!",
    },
    SESSION_TIMEOUT: {
      type: "error",
      message: "Your session has timed out. Please login again.",
    },
    ACTION_ERROR: {
      type: "error",
      message: "It doesn't seem to work...",
    },
  },
  INTERNAL_SERVER: {
    type: "error",
    message: "Service is not working now!",
  },
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

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER: 500,
};
