import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuBarReducer from "./menuBarReducer";
import classesReducer from "./classesReducer";
const appReducer = combineReducers({
    auth: authReducer,
    menuBar: menuBarReducer,
    classes : classesReducer
});


const rootReducer = (state, action) => {
    if (action.type === "SIGN_OUT") {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  


export default rootReducer;