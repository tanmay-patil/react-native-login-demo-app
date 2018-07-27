import * as ACTION_TYPE from '../constants/ActionTypes';

export function setLoginCredentials(object) {
    return { type: ACTION_TYPE.UPDATE_LOGIN_CREDENTIALS, object };
}

export function setIsLoggedStatus(value) {
    return { type: ACTION_TYPE.UPDATE_LOGIN_STATUS, value };
}