

const InitState = {
    userError : null,

}



const userReducer = (state = InitState, action ) => {

    switch(action.type) {
        case 'READUSER_SUCCESS':

            return {
                ...state,
                authError: "readuser_successed"
            }






        default:
            return state

    }



}
