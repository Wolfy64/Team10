import { actionTypes } from '../common';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        status: action.status,
        message: action.message,
        user: action.user
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
