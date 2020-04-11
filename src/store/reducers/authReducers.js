
import { saveJWTStore } from '../../utils/storage';

const InitState = []

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
                redirectToReferer: false
            }
    


        default:
            return state;

    }

}

export default authReducer;