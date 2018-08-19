import {actionTypes} from '../common';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.GOOGLE_AUTHENTICATION:
            return {
                ...state,
                status: action.status,
                message: action.message,
                isAuthorized: action.isAuthorized,
                profile: action.profile,
                token: action.token
            };
        case actionTypes.SAVE:
            return {
                ...state,
                status: action.status,
                message: action.message
            };
        case actionTypes.GET_USER:
            return {
                ...state,
                status: action.status,
                message: action.message,
                user: action.user
            };
        case actionTypes.ADD_GOAL:
            return {
                ...state,
                status: action.status,
                message: action.message,
            };
        default:
            return state
    }
};