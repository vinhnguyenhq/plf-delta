import { combineReducers } from "redux";
import { onlineReducer } from "redux-online-store-enhancer";
import counterReducer from "./counter";
import storeReducer from "./store";

const rootReducer = combineReducers({
  count: counterReducer,
  online: onlineReducer,
  store: storeReducer
});

export default rootReducer;
