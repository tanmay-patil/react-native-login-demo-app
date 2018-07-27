import { UPDATE_LOGIN_CREDENTIALS, UPDATE_LOGIN_STATUS } from "../constants/ActionTypes";
import { AsyncStorage } from "react-native"

const initialState = {
    username: "",
    password: "",
    isLogged: "false"
}

export default (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_LOGIN_CREDENTIALS:
            // return { ...state, loginCredentials: action.object }
            return action.object;

        case UPDATE_LOGIN_STATUS:
            return { ...state, isLogged: action.value }

        default:
            return state;
    }
};