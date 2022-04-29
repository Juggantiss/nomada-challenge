export const TYPE_STATE_UI = {
  TOGGLE_STATUS: "toggle_status",
  TOGGLE_STATUS_FETCH: "toggle_status_fetch"
};

export const changeStatus = (payload) => {
  return {
    type: TYPE_STATE_UI.TOGGLE_STATUS,
    payload
  };
};

export const changeStatusFetch = (payload) => {
  return {
    type: TYPE_STATE_UI.TOGGLE_STATUS_FETCH,
    payload
  };
};
