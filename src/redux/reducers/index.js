import { combineReducers } from "redux";
import { stateUiReducer } from "./stateUi";

export const reducer = combineReducers({
  stateUi: stateUiReducer
});
