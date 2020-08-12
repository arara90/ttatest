import { TOGGLE_DARKMODE, DEFAULT_DARKMODE, DATA_LOADED } from "./types";

export const toggleDarkMode = () => (dispatch) => {
  dispatch({ type: TOGGLE_DARKMODE });
};

export const setDarkMode = () => (dispatch) => {
  dispatch({ type: DEFAULT_DARKMODE });
};

// export const isdataLoaded = () => (dispatch) => {
//   dispatch({ type: DATA_LOADED });
// };
