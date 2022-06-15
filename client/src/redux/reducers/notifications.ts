import { ACTION_NOTIFICATIONS } from "../contants";
import { INotificationState } from "../interfaces";
import { AnyAction } from "../types";

const initialState: INotificationState = {
  notification: {
    message: "",
    type: "",
  },
  isActive: false,
};

const notifications = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTION_NOTIFICATIONS.SET_NOTIFICATION: {
      return {
        ...state,
        notification: action.payload,
        isActive: true,
      };
    }

    case ACTION_NOTIFICATIONS.CLEAN: {
      return initialState;
    }

    default:
      return state;
  }
};

export default notifications;
