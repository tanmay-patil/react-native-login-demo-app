import * as ACTION_TYPE from '../constants/ActionTypes';

export function updateUsername(value) {
    return { type: ACTION_TYPE.UPDATE_USERNAME, value };
}

export function updatePassword(value) {
    return { type: ACTION_TYPE.UPDATE_PASSWORD, value };
} 