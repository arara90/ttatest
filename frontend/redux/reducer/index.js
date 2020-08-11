import {
    GET_DATAS,
    DATA_LOADING,
  } from "../actions/types";
  
  const initialState = {
    darkMode: false,
    isLoaded: false,
    isLoading: false,
    score: 0,
    words: [],
    wrong: [], 
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case DATA_LOADING:
        return {
          ...state,
          isLoading: true
        };
  
      default:
        return state;
    }
  }
  