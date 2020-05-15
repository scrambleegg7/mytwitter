
const signupHost = '/signup';
const signinHost = '/signin';
const signoutHost = '/signout';
const readuserHost = '/user/';
const resetPasswordHost = '/reset-password/';


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



    return (dispatch , getState,  getFirebase  ) => {

        fetch(signupHost, requestOptions(user))
        .then(handleResponse)
        .then( (data) => {
            //console.log("message (authActions) ", data)
            dispatch({ type: "SIGNUP_SUCCESS" })
            alert("確認のメッセージをあなたのEmailボックスに送りました。確認お願いいたします。")

        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'SIGNUP_ERROR', err });
        })
    }
}

export const getFirebaseToken = () => {

    return (dispatch , getState,  getFirebase  ) => {

        const firebase = getFirebase();

        firebase.auth().currentUser.getIdToken(
            /**/true 
        )
        .then( (IdToken) => {
            console.log("get Firebase Token", IdToken)
            dispatch({ type: "FIREBASETOKEN_SUCCESS"  , 
                        firebaseToken: IdToken, 
            })
        })
        .catch( (err) => {
            console.log("getting firebase token error", err)            
            dispatch( { type: 'FIREBASETOKEN_ERROR', err });
        })
    
    }
}

export const signIn = (credentials) => {

    const email = credentials.email;
    const password = credentials.password;



    //return (dispatch, getState) => {
    return (dispatch , getState,  getFirebase  ) => {

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        )
        .then( () => {

            //console.log("signin firebase. Auth data --> : ",firebase.auth()  )
            const  firebase_logined_user = firebase.auth().currentUser;
            console.log("signIn firebase current user (authActions)",firebase_logined_user.uid)

            firebase.auth().currentUser.getIdToken(
                /**/true 
            )
            .then( (idToken) => {
                console.log("get Firebase Token", idToken)

                const user = {
                    email, 
                    password, 
                    idToken,
                    uid: firebase_logined_user.uid, 
                }
            
                fetch(signinHost, requestOptions(user))
                .then(handleResponse)
                .then( (data) => {
                    //console.log(" signin (authActions) ", data)
                    dispatch({ type: "SIGNIN_SUCCESS"  , 
                                data: data,   // data.token come from firebase_auth of mongo backend process.
                                firebaseToken: idToken, 
                    })
                })
                .catch( (err) => {
                    console.log("signin error", err)            
                    dispatch( { type: 'SIGNIN_ERROR', err: err.message });
                })
            })
        })
        .catch( (err) => {
            const message = err.message
            console.log("sign in error from firebase.", err.message)
            dispatch( { type: 'SIGNIN_ERROR' , err: message } );
        })
    

    }

}


export const signOut = () => {

    //return (dispatch, getState) => {
    return (dispatch , getState,  getFirebase  ) => {


        const firebase = getFirebase();

        firebase.auth().signOut()
        .then( () => {
            console.log("SignOut success with firebase function. ")
            }
        )

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


export const forgetPassword = (newUser) => {

    return (dispatch , getState,  getFirebase  ) => {

        const firebase = getFirebase();

        firebase.auth().sendPasswordResetEmail(newUser.email)
        .then( () => {
            console.log("forgetPassword (authActions) successed.")
            dispatch( { type: 'FOREGETPASSWORD_SUCCESS' } )
        })
        .catch( (err) => {
            dispatch( { type: 'FOREGETPASSWORD_ERROR', err: err.message });
        })

        
    }
}



export const resetPassword = (credentials) => {

    //const email = credentials.email;
    const user = {
        email: credentials.email,
        newPassword: credentials.newpassword
    }


    return (dispatch , getState,  getFirebase  ) => {
    //return (dispatch, getState) => {

        const firebase = getFirebase();
        const firebase_user = firebase.auth().currentUser;

        console.log("** resetPassword authActions:", firebase_user)
        //var newPassword = getASecureRandomPassword();
        firebase_user.updatePassword(user.newPassword)
        .then( () => {


            fetch(resetPasswordHost, requestPutOptions(user))
            .then(handleResponse)
            .then( (data) => {
                //console.log(" signin (authActions) ", data)
                // Update successful.
                dispatch({ type: "RESETPASS_SUCCESS"  , data   }   )
            })
            .catch( (err) => {
                console.log("resetPassword error", err)            
                dispatch( { type: 'RESETPASS_ERROR', err });
            })

        })
        .catch((err) =>  {
            // An error happened.
            console.log("resetPassword error", err)            
            dispatch( { type: 'RESETPASS_ERROR', err });

        });
          
        


    }

}
