import CSV from "comma-separated-values";
import datas from "./datas/datas";

import { GET_TESTDATA } from "./types";

export const getTestData = (questions, options) => (dispatch) => {
    console.log("action, getTestData ")
    dispatch({ type: GET_TESTDATA, payload: {questions: questions, options:options } });

};
