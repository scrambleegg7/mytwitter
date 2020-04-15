

import moment from 'moment';
import { v4 as uuid } from 'uuid';

const readuserHost = 'http://localhost:8080/user';

export const readUser = (credentials) => {

    const userId = credentials.userId;

    const user = {
        firstname, lastname, email, password, backgroundColor
    }

    return (dispatch, getState) => {

        fetch(signupHost, requestOptions(user))
        .then(handleResponse)
        .then( (data) => {
            //console.log("message (authActions) ", data)
            dispatch({ type: "SIGNUP_SUCCESS" })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'SIGNUP_ERROR', err });
        })
    }
}
