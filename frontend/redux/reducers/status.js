import {
  DATA_LOADED,
} from "../actions/types";

const initialState = {
  hasLoadedDatas: false,
};

export default function (state = initialState, action) {
  switch (action.type) {

    case DATA_LOADED:
      return {
        ...state,
        hasLoadedDatas: true,
      };

    default:
      return state;
  }
}
