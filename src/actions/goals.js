import axios from 'axios';
import { actionTypes } from '../common';

export const getGoals = email => {
  return dispatch => {
    return axios
      .get(`http://localhost:3001/users/${email}`)
      .then(response => {
        // Dispatch another action to consume data
        if (response.status === 200) {
          dispatch({
            type: actionTypes.GET_GOALS,
            status: 'SUCCESS',
            users: response.data
          });
        } else {
          dispatch({
            type: actionTypes.SAVE,
            status: 'ERROR'
          });
        }
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GET_GOALS,
          status: 'ERROR'
        });
      });
  };
};
