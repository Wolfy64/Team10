import axios from 'axios';
import {actionTypes} from '../common';

export const getUser = email => {
    return dispatch => {
        return axios
            .get(`http://localhost:3001/users/${email}`)
            .then(response => {
                // Dispatch another action to consume data
                if (response.status === 200) {
                    dispatch({
                        type: actionTypes.GET_USER,
                        status: 'SUCCESS',
                        user: response.data
                    });
                } else if (response.status === 404) {
                    addUser(email)
                        .then(user => {
                            dispatch({
                                type: actionTypes.GET_USER,
                                status: 'SUCCESS',
                                user: user
                            });
                        })
                        .catch(error => {
                            dispatch({
                                type: actionTypes.GET_USER,
                                status: 'ERROR',
                                user: undefined
                            });
                        });
                } else {
                    dispatch({
                        type: actionTypes.GET_USER,
                        status: 'ERROR',
                        user: undefined
                    });
                }
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_USER,
                    status: 'ERROR',
                    user: undefined
                });
            });
    };
};

const addUser = (email) => {

    const user = {

    };

    return axios
        .post(``)
        .then(response => {
            // Dispatch another action to consume data
            if (response.status === 200) {
                return user;
            } else {
                throw "error";
            }
        })
        .catch(error => {
            throw error;
        });
};
