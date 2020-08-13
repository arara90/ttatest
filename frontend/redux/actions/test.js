import CSV from "comma-separated-values";
import datas from "./datas/datas";

import { GET_TESTDATA, RECORD_ANSWER } from "./types";

export const getTestData = (year, questions, options) => (dispatch) => {
  dispatch({
    type: GET_TESTDATA,
    payload: { year: year, questions: questions, options: options },
  });
};

export const recordAnswer = (answers) => (dispatch) => {
  return dispatch({
    type: RECORD_ANSWER,
    payload: answers,
  });
};
