import { GET_TESTDATA, RECORD_ANSWER } from "../actions/types";

const initialState = {
  year: "",
  questions: [],
  options: [],
  answers: null,
  isLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TESTDATA:
      return {
        ...state,
        year: action.payload.year,
        questions: action.payload.questions,
        options: action.payload.options,
        isLoaded: true,
      };

    case RECORD_ANSWER:
      return {
        ...state,
        answers: action.payload,
      };

    // case RESET_TESTDATA:
    //   return initialState;

    default:
      return state;
  }
}
