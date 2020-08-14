import { GET_TESTDATA, RECORD_ANSWER, RESET_TEST } from "../actions/types";

const initialState = {
  numOfQuestions: 0,
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
        numOfQuestions: action.payload.numOfQuestions,
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

    case RESET_TEST:
      return initialState;

    default:
      return state;
  }
}
