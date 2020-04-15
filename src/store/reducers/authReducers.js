

import { loadJWTStore, removeJWTStore, saveJWTStore } from '../../utils/storage';

const InitState = {
    authError : null,
    redirectToReferer: false,
    loading: false,
    data: loadJWTStore(),
}


const authReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            //console.log("successfully signup from authreducer.")
            return {
                ...state,
                authError: "signup_successed"
            }

        case 'SIGNUP_ERROR':
            //console.log("signup error from authreducer.")
            return {
                ...state,
                authError: action.err
            }
    

        case 'SIGNIN_SUCCESS':
            //console.log(action)
            saveJWTStore(  action.data  )
            return {
                ...state,
                authError: "signin_successed",
                data: action.data,
                redirectToReferer: true
            }

        case 'SIGNIN_ERROR':
            //console.log("signup error from authreducer.")
            return {
                ...state,
                authError: action.err,
                data : null,
                redirectToReferer: false,
                loading: false
            }
    
        case 'SIGNOUT_SUCCESS':

            removeJWTStore()
            console.log("remove JWT from authreducr.")
            return {
                ...state,
                redirectToReferer: false,
                data : null,
                authError: null
            }


        case 'SIGNOUT_ERROR':
            //console.log("signup error from authreducer.")
            return {
                ...state,
                authError: action.err
            }
    

        default:
            return state
            

    }

}

export default authReducer;