import CSV from "comma-separated-values";
import datas from "./datas/datas";

import { GET_DATAS, DATA_LOADED } from "./types";

export const getDatas = () => (dispatch) => {
  const combineDatas = (data) => {
    const csv = new CSV(data, { header: false }).parse();
    const res = [];
    csv.forEach((row) => {
      var title = "";
      var keyword = [];
      row.forEach((cell, index) => {
        //index - 0:국문표제어  1:영문표제어, 2:약어,  3:동의어 4: content
        if (index < 4) {
          if (index == 0) title = cell;
          keyword.push(cell);
        } else {
          res.push({ title: title, keywords: keyword, content: cell});
        }
      }); //fin row.forEach
    }); //fin csv.forEach

    return res;
  };

  var words = {};
  for (var key in datas) words = { ...words, [key]: combineDatas(datas[key]) };
  dispatch({ type: GET_DATAS, payload: words });
  dispatch({ type: DATA_LOADED });
};
