import axios from 'axios';
import {actionTypes, constants} from '../common';

export const googleSignin = () => {

    // function that dispatches an action at a later time
    return (dispatch) => {

        oauthSignIn();
        dispatch({
            type: actionTypes.GOOGLE_AUTHENTICATION,
            status: 'WAITING',
            isAuthorized: false,
            profile: undefined
        });

        /*
        * Create form to request access token from Google's OAuth 2.0 server.
        */
        function oauthSignIn() {
            // Create <form> element to submit parameters to OAuth 2.0 endpoint.
            const form = document.createElement('form');
            form.setAttribute('method', 'GET'); // Send as a GET request.
            form.setAttribute('action', constants.GOOGLE_OAUTH2_API);

            // Parameters to pass to OAuth 2.0 endpoint.
            const params = {
                'client_id': constants.GOOGLE_CLIENT_ID,
                'redirect_uri': constants.GOOGLE_OAUTH2_REDIRECT_URL,
                'response_type': 'token',
                'scope': constants.GOOGLE_API_SCOPES,
                'include_granted_scopes': 'true',
                'state': 'eCampusHubAuthentication'
            };

            // Add form parameters as hidden input values.
            for (const p in params) {
                const input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', p);
                input.setAttribute('value', params[p]);
                form.appendChild(input);
            }

            // Add form to page and submit it to open the OAuth 2.0 endpoint.
            document.body.appendChild(form);
            form.submit();
        }
    };
};

export const googleAuthentication = (token) => {
    return (dispatch) => {
        return axios
            .get(`${constants.GOOGLE_TOKEN_INFO_API}?access_token=${token}`)
            .then(response => {
                // Dispatch another action to consume data
                if (response.status === 200) {
                    if (parseInt(response.data.expires_in) > 0) {
                        googleGetUserProfile(token)
                            .then(profile => {
                                dispatch({
                                    type: actionTypes.GOOGLE_AUTHENTICATION,
                                    status: 'SUCCESS',
                                    isAuthorized: true,
                                    profile: profile,
                                    token: token
                                });
                            })
                            .catch(error => {
                                dispatch({
                                    type: actionTypes.GOOGLE_AUTHENTICATION,
                                    status: 'ERROR',
                                    isAuthorized: false,
                                    profile: undefined,
                                    token: undefined
                                });
                            });
                    } else {
                        dispatch({
                            type: actionTypes.GOOGLE_AUTHENTICATION,
                            status: 'ERROR',
                            isAuthorized: false,
                            profile: undefined,
                            token: undefined
                        });
                    }
                } else {
                    dispatch({
                        type: actionTypes.GOOGLE_AUTHENTICATION,
                        status: 'ERROR',
                        isAuthorized: false,
                        profile: undefined,
                        token: undefined
                    });
                }
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GOOGLE_AUTHENTICATION,
                    status: 'ERROR',
                    isAuthorized: false,
                    profile: undefined,
                    token: undefined
                });
            });
    }
};

const googleGetUserProfile = (token) => {
    return axios
        .get(`${constants.GOOGLE_USER_INFO_API}?access_token=${token}`)
        .then(response => {
            // Dispatch another action to consume data
            if (response.status === 200) {
                return {
                    id: response.data.sub,
                    fullName: response.data.name,
                    firstName: response.data.given_name,
                    lastName: response.data.family_name,
                    imageURL: response.data.picture,
                    email: response.data.email
                };
            } else {
                throw "error";
            }
        })
        .catch(error => {
            throw error;
        });
};