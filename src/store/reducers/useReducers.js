

const InitState = {
    userError : null,

}


const userReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'READUSER_SUCCESS':

            return {
                ...state,
                data: action.data,
                userError: "readuser_successed"
            }

        case 'READUSER_ERROR':

            return {
                ...state,
                userError: action.err
            }
    
        default:
            return state

    }



}
