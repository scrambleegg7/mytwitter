

//import moment from 'moment';
//import { v4 as uuid } from 'uuid';
import { removeJWTStore } from '../../utils/storage';

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

const updateUserOptions = (token, user) => {
    return ({
    method: 'PUT',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` },
    body: JSON.stringify(user)
    })
    
};

const removeUserOptions = (token) => {
    return ({
    method: 'DELETE',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` },
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
            const error = (data && (data.error || data.statusText) );
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

export const updateUser = (credentials) => {

    const userId = credentials.userId;
    const token = credentials.token;

    return (dispatch, getState) => {

        fetch(readuserHost + userId, updateUserOptions(token, credentials))
        .then(handleResponse)
        .then( (userData) => {
            //console.log("message (authActions) ", userData)
            dispatch({ type: "UPDATEUSER_SUCCESS", userData })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'UPDATESER_ERROR', err });
        })
    }
}

export const removeUser = (credentials) => {

    const userId = credentials.userId;
    const token = credentials.token;

    return (dispatch, getState) => {

        fetch(readuserHost + userId, removeUserOptions(token, credentials))
        .then(handleResponse)
        .then( (userData) => {
            //console.log("message (authActions) ", userData)
            removeJWTStore()
            dispatch({ type: "REMOVEUSER_SUCCESS", userData })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'REMOVEESER_ERROR', err });
        })
    }
}
