import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";



const loadFromLocalStorage = () => {
    try {
        const auth = JSON.parse(localStorage.getItem("auth") ? localStorage.getItem("auth") : "{}");

        const parsedState = {
            auth
        }
        return parsedState;
    }
    catch (error) {
        console.log(error);
    }
}

const saveToLocalstorage = (state) => {
    try {
        localStorage.setItem("auth", JSON.stringify(state.auth));
    } catch (error) {
        console.log(error);
    }
}


const persistedState = loadFromLocalStorage();
const middleware = [thunk, logger];

// Create the redux store
const store = createStore(rootReducer, persistedState, applyMiddleware(...middleware));

/*
const unsubscribe = store.subscribe(() => {
    saveToLocalstorage(store.getState());
})
*/

export default store;
