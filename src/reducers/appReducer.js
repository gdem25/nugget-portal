import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuBarReducer from "./menuBarReducer";
const appReducer = combineReducers({
    auth: authReducer,
    menuBar: menuBarReducer
});


const rootReducer = (state, action) => {
    if (action.type === "SIGN_OUT") {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  


export default rootReducer;