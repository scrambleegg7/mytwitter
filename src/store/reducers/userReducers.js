

const InitState = {
    userError : null,
    userData: null, 
    redirectToProfile: false
}


const userReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'GETUSER_SUCCESS':

            return {
                ...state,
                userData: action.userData,
                userError: "getuser_successed",
                redirectToProfile: true

            }

        case 'GETUSER_ERROR':

            return {
                ...state,
                userData: null,
                userError: action.err,
                redirectToProfile: false
            }
    
        default:
            return state

    }



}

export default userReducer;