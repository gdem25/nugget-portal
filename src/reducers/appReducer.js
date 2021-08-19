import { combineReducers } from "redux"
import authReducer from "./authReducer"
import menuBarReducer from "./menuBarReducer"
import classesReducer from "./classesReducer"
import tablesReducer from "./tablesReducer"
import chatReducer from "./chatReducer"
import gpaReducer from "./gpaReducer"
import adminReducer from "./adminReducer"
const appReducer = combineReducers({
    auth: authReducer,
    menuBar: menuBarReducer,
    classes : classesReducer,
    tables : tablesReducer,
    chat: chatReducer,
    gpa : gpaReducer,
    admin : adminReducer
});


const rootReducer = (state, action) => {
    if (action.type === "SIGN_OUT") {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  


export default rootReducer;