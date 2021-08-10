import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const rootReducers = combineReducers({
  user: userReducer,
});

export default rootReducers;
