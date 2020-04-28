
const signupHost = 'http://localhost:8080/signup';
const signinHost = 'http://localhost:8080/signin';
const signoutHost = 'http://localhost:8080/signout';
const readuserHost = 'http://localhost:8080/user/';
const resetPasswordHost = 'http://localhost:8080/reset-password/';


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
            const error = (data && ( data.error || data.statusText ));
            console.log("error from handleResponse", error)
            return Promise.reject(error)
        }

        return data;
    })

};

const requestPutOptions = (data) => {
    return ({
    method: 'PUT',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' },
    body: JSON.stringify(data)
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

const requestGetOptions = () => {
    return ({
        method: 'GET',
    })
};


export const signUp = (credentials) => {

    const email = credentials.email;
    const password = credentials.password;
    const firstname = credentials.firstname
    const lastname = credentials.lastname;
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

    const email = credentials.email;
    const password = credentials.password;

    const user = {
        email, password
    }


    return (dispatch, getState) => {

        console.log("signin authActions:", user)

        fetch(signinHost, requestOptions(user))
        .then(handleResponse)
        .then( (data) => {
            //console.log(" signin (authActions) ", data)
            dispatch({ type: "SIGNIN_SUCCESS"  , data   }   )
        })
        .catch( (err) => {
            console.log("signin error", err)            
            dispatch( { type: 'SIGNIN_ERROR', err });
        })
    }

}


export const signOut = () => {

    return (dispatch, getState) => {

        fetch(signoutHost, requestGetOptions())
        .then(handleResponse)
        .then( (data) => {
            //console.log(" signin (authActions) ", data)
            dispatch({ type: "SIGNOUT_SUCCESS"   }   )
        })
        .catch( (err) => {
            console.log("signin error", err)            
            dispatch( { type: 'SIGNOUT_ERROR', err });
        })
    }


}

export const getUser = (credentials) => {

    const userId = credentials.userId;
    const token = credentials.token;

    return (dispatch, getState) => {

        fetch(readuserHost + userId, requestUserOptions(token))
        .then(handleResponse)
        .then( (data) => {
            console.log("message (authActions) ", data)
            dispatch({ type: "READUSER_SUCCESS" })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'READUSER_ERROR', err });
        })
    }
}

export const resetPassword = (credentials) => {

    //const email = credentials.email;
    const user = {
        email: credentials.email,
        newPassword: credentials.newpassword
    }

    return (dispatch, getState) => {

        console.log("signin authActions:", user)

        fetch(resetPasswordHost, requestPutOptions(user))
        .then(handleResponse)
        .then( (data) => {
            //console.log(" signin (authActions) ", data)
            dispatch({ type: "RESETPASS_SUCCESS"  , data   }   )
        })
        .catch( (err) => {
            console.log("signin error", err)            
            dispatch( { type: 'RESETPASS_ERROR', err });
        })
    }

}
