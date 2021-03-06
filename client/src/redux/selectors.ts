import { RootReducer } from "./reducers/rootReducer";

export const quizSelector = (store: RootReducer) => store.quiz;
export const userSelector = (store: RootReducer) => store.user;
export const notificationSelector = (store: RootReducer) => store.notifications;
