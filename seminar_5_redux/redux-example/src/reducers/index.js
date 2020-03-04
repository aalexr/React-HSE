import { SET_RECEIVER_ID, NOTIFY_RECEIVER, STOP_NOTIFY } from "../actions";

const defaultState = {
  receiverId: '0',
  senderId: null,
  notify: false,
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RECEIVER_ID: {
      return {
        ...state,
        receiverId: action.payload
      };
    }

    case NOTIFY_RECEIVER: {
      return {
        ...state,
        senderId: action.payload,
        notify: true
      };
    }

    case STOP_NOTIFY: {
      return {
        ...state,
        notify: false
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
