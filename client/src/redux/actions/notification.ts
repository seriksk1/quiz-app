import { ACTION_NOTIFICATIONS } from "../contants";
import { INotification } from "../interfaces";

export const setNotification = (notification: INotification) => ({
  type: ACTION_NOTIFICATIONS.SET_NOTIFICATION,
  payload: notification,
});

export const cleanNotification = () => ({
  type: ACTION_NOTIFICATIONS.CLEAN,
});

export const showNotification =
  (notification: INotification) => (dispatch: any) => {
    dispatch(setNotification(notification));
  };
