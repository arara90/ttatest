import {
  TOGGLE_DARKMODE,
  DEFAULT_DARKMODE,
  DATA_LOADED,
} from "../actions/types";

const initialState = {
  darkMode: false,
  hasLoadedDatas: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case DEFAULT_DARKMODE:
      return {
        ...state,
        darkMode: false,
      };

    case DATA_LOADED:
      return {
        ...state,
        hasLoadedDatas: true,
      };

    default:
      return state;
  }
}
