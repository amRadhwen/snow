import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILED,
    USER_SIGNIN_RESET,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_SIGNUP_RESET,
    USER_SIGNOUT_REQUEST,
    USER_SIGNOUT_SUCCESS,
    USER_SIGNOUT_FAILED,
    USER_SIGNOUT_RESET
} from "../constants";


export const signinReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, success: true, token: action.payload.token, user: action.payload.user};
        case USER_SIGNIN_FAILED:
            return {loading: false, error: action.payload};
        case USER_SIGNIN_RESET:
            return {}
        default:
        return state;
    }
}

export const signupReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading: true};
        case USER_SIGNUP_SUCCESS:
            return {loading: false, success: true, token: action.payload.token, user: action.payload.user};
        case USER_SIGNUP_FAILED:
            return {loading: false, error: action.payload};
        case USER_SIGNUP_RESET:
            return {}
        default:
        return state;
    }
}

export const signoutReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNOUT_REQUEST:
            return {loading: true};
        case USER_SIGNOUT_SUCCESS:
            return {loading: false, success: true};
        case USER_SIGNOUT_FAILED:
            return {loading: false, error: true}
        case USER_SIGNOUT_RESET:
            return {}
        default:
        return state;
    }
}
