import CSV from "comma-separated-values";
import datas from "./datas/datas";

import { GET_TESTDATA, RECORD_ANSWER, RESET_TEST } from "./types";

export const getTestData = (data) => (dispatch) => {
  dispatch({
    type: GET_TESTDATA,
    payload: data,
  });
};

export const recordAnswer = (answers) => (dispatch) => {
  return dispatch({
    type: RECORD_ANSWER,
    payload: answers,
  });
};

export const resetTest = () => (dispatch) => {
  return dispatch({
    type: RESET_TEST
  });
};