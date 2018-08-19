import { actionTypes } from '../common';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_GOALS:
      return {
        ...state,
        status: action.status,
        message: action.message,
        users: action.users
      };
    case actionTypes.SAVE:
      return {
        ...state,
        status: action.status,
        message: action.message
      };
    default:
      return state;
  }
};
