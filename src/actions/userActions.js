import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_SIGNIN_RESET
} from "../constants";
import axios from "axios";


export const signup = (_data) => async(dispatch) => {
    console.log(USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED)
    try {
        dispatch({
            type: USER_SIGNUP_REQUEST
        })
        const data = await axios.post(`${process.env.SERVER_URL}/api/user/`, _data);
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        })
        localStorage.setItem("auth", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAILED,
            payload: error
        })
    }
}