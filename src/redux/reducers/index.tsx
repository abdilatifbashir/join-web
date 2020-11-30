import { combineReducers } from "redux";

import usersReducer from "./userReducer";
import memberReducer from "./memberReducer";

export default combineReducers({
  auth: usersReducer,
  members:memberReducer,
});