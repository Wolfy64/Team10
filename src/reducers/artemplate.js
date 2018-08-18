import {actionTypes} from '../common';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_VIDEO_ASSET:
            return {...state, status: action.status, message: action.message};
        default:
            return state
    }
};