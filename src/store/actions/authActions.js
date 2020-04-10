import moment from 'moment';
import { v4 as uuid } from 'uuid';

const signupHost = 'http://localhost:8080/signup';
const signinHost = 'http://localhost:8080/signin';

const requestOptions = (user) => {
    return ({
    method: 'POST',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' },
    body: JSON.stringify(user)
    })
};

export const signUp = (credentials) => {

    const email = credentials.email;
    const password = credentials.password;
    const firstname = credentials.firstname
    const lastname = credentials.lastname;
    const name = lastname + " " + firstname;

    const user = {
        name, email, password
    }

    return (dispatch, getState) => {

        console.log("signup dispatch", user)


        fetch(signupHost, requestOptions(user))
        .then( () => { 
            dispatch({ type: "SIGNUP_SUCCESS" })
        })
        .catch( (err) => {
            dispatch( { type: 'SIGNUP_ERROR', err });
        })


    }

}

export const signIn = (credentials) => {

    return (dispach) => {

        console.log("signin dispatch", credentials)


        dispach({
            type: "SIGNIN"
        })

    }

}