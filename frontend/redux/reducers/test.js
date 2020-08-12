import { GET_TESTDATA, RECORD_SCORE } from "../actions/types";

const initialState = {
  testdata: [],
  score: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TESTDATA:
      return {
        testdata: action.payload,
        score: new Array(action.payload.length).fill(0),
      };

    case RECORD_SCORE:
      return {
        ...state,
        score: (state.score[action.payload.num] = action.payload.isCorrect),
      };

    default:
      return state;
  }
}
