import { combineReducers } from "redux";
import data from "./data";
import test from "./test";
import status from "./status";

export default combineReducers({
  data,
  test,
  status,
});
