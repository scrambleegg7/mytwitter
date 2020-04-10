
const InitState = {
    authError : null,
}

const authReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            console.log("successfully signup from authreducer.")
            return {
                ...state,
                authError: "signup_successed"
            }

        case 'SIGNUP_ERROR':
            console.log("signup error from authreducer.")
            return {
                ...state,
                authError: action.err.message
            }
    
        case 'SIGNIN':
            return {...state,
                authError: "signin_successed"
            }

        default:
            return state
            

    }

}

export default authReducer;