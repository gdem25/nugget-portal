import { combineReducers } from "redux";
import authReducer from "./authReducer";
import menuBarReducer from "./menuBarReducer";
import classesReducer from "./classesReducer";
import tablesReducer from "./tablesReducer"
const appReducer = combineReducers({
    auth: authReducer,
    menuBar: menuBarReducer,
    classes : classesReducer,
    tables : tablesReducer
});


const rootReducer = (state, action) => {
    if (action.type === "SIGN_OUT") {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  


export default rootReducer;