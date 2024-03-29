import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducers;
