import moment from 'moment';
import { v4 as uuid } from 'uuid';


const signupHost = 'http://localhost:8080/signup';

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

        const requestOptions = {
                method: 'POST',
                headers: { 
                    Accept: 'application/json',
                    'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };

        fetch(signupHost, requestOptions)
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