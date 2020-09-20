import { FETCH_POSTS } from "../actions/types";

const initialState = {
  characters: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        characters: action.payload.results,
      };
   
    default:
      return state;
  }
}
