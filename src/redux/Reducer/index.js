import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./Counter.reducer";

export const rootReducer = combineReducers({
    counter:counterReducer,
    auth : authReducer,
    alert: alertReducer
})