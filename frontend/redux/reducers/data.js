import { GET_DATAS } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
