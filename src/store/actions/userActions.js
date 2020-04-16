

import moment from 'moment';
import { v4 as uuid } from 'uuid';

const readuserHost = 'http://localhost:8080/user/';


const requestUserOptions = (token) => {
    return ({
    method: 'GET',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` }
    })
};


const handleResponse = (response ) => {


    //console.log("handleResponse", response)    

    return response.text()
    .then( (text) => {
        const data = text && JSON.parse(text);

        
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


export const getUser = (credentials) => {

    const userId = credentials.userId;
    const token = credentials.token;

    return (dispatch, getState) => {

        fetch(readuserHost + userId, requestUserOptions(token))
        .then(handleResponse)
        .then( (userData) => {
            //console.log("message (authActions) ", userData)
            dispatch({ type: "GETUSER_SUCCESS", userData })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'GETUSER_ERROR', err });
        })
    }
}
