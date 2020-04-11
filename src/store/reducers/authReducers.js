
const InitState = []

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
                authError: action.err
            }
    

        case 'SIGNIN':
            return state;

        default:
            return state;

    }

}

export default authReducer;