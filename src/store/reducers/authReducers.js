
InitState = []

const authReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'SIGNUP_SUCCESS':
            console.log("successfully signup from authreducer.")
            return {
                ...state,
                authError: null
            }


        case 'SIGNUP_ERROR':
            console.log("signup error from authreducer.")
            return {
                ...state,
                authError: action.err.message
            }
    

        case 'SIGNIN':
            return state;

        default:
            return state;

    }

}