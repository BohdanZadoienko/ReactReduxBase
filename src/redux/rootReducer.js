import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { dislikesReducer } from "./dislikeReducer";
import { inputReducer } from "./inputReducer";
import { commentReducer } from "./commentReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  likesReducer,
  dislikesReducer,
  inputReducer,
  commentReducer,
  appReducer,
});
