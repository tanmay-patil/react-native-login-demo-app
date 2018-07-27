import { combineReducers } from 'redux';

import userDetailsReducer from "./userDetailsReducer";

export default combineReducers({
    loginCredentials: userDetailsReducer,
});
