import moment from 'moment';
import { v4 as uuid } from 'uuid';

const signupHost = 'http://localhost:8080/signup';
const signinHost = 'http://localhost:8080/signin';


const handleResponse = (response ) => {

    return response.text()
    .then( (text) => {
        const data = text && JSON.parse(text);

        console.log("handleResponse", response)
        
        if (!response.ok) {
            if (response.status !== 200) {
                console.log("handleResponse", response)
            }
            const error = (data && data.error || data.statusText );
            console.log("error from handleResponse", error)
            return Promise.reject(error)
        }

        return data;
    })

};

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
    const backgroundColor = credentials.backgroundColor;

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

export const signIn = (credentials) => {

    return (dispach) => {

        console.log("signin dispatch", credentials)


        dispach({
            type: "SIGNIN"
        })

    }

}