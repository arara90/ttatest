import { GET_TESTDATA, RECORD_ANSWER } from "../actions/types";

const initialState = {
  testdata: [],
  score: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TESTDATA:
      return {
        questions: action.payload.questions,
        options: action.payload.options,
        answers: new Array(action.payload.questions.length).fill(null),
      };

    case RECORD_ANSWER:
      return {
        ...state,
        score: (state.score[action.payload.num] = action.payload.isCorrect),
      };

    default:
      return state;
  }
}
