import { TYPE_STATE_UI } from "../actions/stateUi";

const initialState = {
  statusText: "Selecciona una foto",
  statusFetch: null
};

export const stateUiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_STATE_UI.TOGGLE_STATUS:
      return {
        ...state,
        statusText: action.payload
      };
    case TYPE_STATE_UI.TOGGLE_STATUS_FETCH:
      return {
        ...state,
        statusFetch: action.payload
      };
    case TYPE_STATE_UI.TOGGLE_RESET:
      return initialState;

    default:
      return state;
  }
};
