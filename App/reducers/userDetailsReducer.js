import { UPDATE_USERNAME, UPDATE_PASSWORD } from "../constants/ActionTypes";

const initialState = {
    username: 'admin',
    password: 'admin'
}

export default (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_USERNAME:
            return { ...state, username: action.payload }
        // return action.payload;


        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        // return action.payload;

        default:
            return state;
    }
};