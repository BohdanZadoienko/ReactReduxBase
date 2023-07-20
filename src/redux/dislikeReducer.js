import { INCREMENT_DISLIKES } from "./types";

const initialState = {
  dislikes: 0,
};

export const dislikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_DISLIKES:
      return {
        ...state,
        dislikes: state.dislikes + 1,
      };
    default:
      return state;
  }
};
