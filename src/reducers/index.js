import { combineReducers } from "redux";
import tourReducer from "./tourReducer";
import userReducer from "./userReducer";

export default combineReducers({
    tours: tourReducer,
    user: userReducer
});