export const SET_RECEIVER_ID = "SET_RECEIVER_ID";
export const setReceiverId = receiverId => ({
  type: SET_RECEIVER_ID,
  payload: receiverId
});

export const NOTIFY_RECEIVER = "NOTIFY_RECEIVER";
export const notifyReceiver = senderId => ({
  type: NOTIFY_RECEIVER,
  payload: senderId
});

export const STOP_NOTIFY = "STOP_NOTIFY";
export const stopNotify = {
  type: STOP_NOTIFY
};
