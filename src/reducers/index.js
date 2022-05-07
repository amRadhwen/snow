import { combineReducers } from "redux";

import {
    signinReducer,
    signupReducer,
    signoutReducer
} from "./userReducer";


const rootReducer = combineReducers({
    auth: signinReducer,
    signup: signupReducer
})

export default rootReducer;
