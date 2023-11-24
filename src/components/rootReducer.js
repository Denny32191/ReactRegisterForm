import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";
const rootReducer = combineReducers({
    registration: registrationReducer,
});
export default rootReducer