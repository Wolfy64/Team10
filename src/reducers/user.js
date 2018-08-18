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
        default:
            return state
    }
};