import moment from 'moment';
//import { saveStore, loadStore } from '../../utils/storage';

//const loadstore = loadStore()

const InitState = {
    postData: null,
    postError: null,
}

const tweetReducer = (state = InitState, action ) => {

    switch(action.type) {

        case 'POST_SUCCESS':
            console.log("create_post new data from tweetReducer ", action.data  )
            console.log("create_post old state from tweetReducer ", ...state.postData  )

            return {
                //...state, 
                postData: state.postData.concat([action.data]),
                postError: null
            }
            
        case 'POST_ERROR':
            console.log("create_tweet_error from tweetReducer ", action.err  )
            return {
                ...state, 
                single_data: null,
                postError: action.err
            }

        case 'UPDATEPOST_SUCCESS':
            console.log("update_post new data from tweetReducer ", action.data  )
            console.log("update_post old state from tweetReducer ", ...state.postData  )

            return {
                //...state, 
                postData: state.postData,
                postError: null
            }
            
        case 'UPDATEPOST_ERROR':
            console.log("update_tweet_error from tweetReducer ", action.err  )
            return {
                ...state, 
                postData: null,
                postError: action.err
            }
    
        case 'REMOVEPOST_SUCCESS':
            console.log("remove_post new data from tweetReducer ", action.data  )
            console.log("remove_post old state from tweetReducer ", ...state.postData  )

            return {
                //...state, 
                postData: state.postData.filter(item => item._id != action.data._id),
                postError: null
            }
            
        case 'REMOVEPOST_ERROR':
            console.log("create_tweet_error from tweetReducer ", action.err  )
            return {
                ...state, 
                single_data: null,
                postError: action.err
            }
    
        case 'GETPOST_SUCCESS':
            console.log("get_tweet from tweetReducer ", action.data  )
            return {
                ...state, 
                postData: action.data,
                postError: "ok"
            }
            
        case 'GETPOST_ERROR':
            console.log("get_tweet_error from tweetReducer ", action.err  )
            return {
                ...state, 
                data: null,
                postError: action.err
            }
        
        {/*
        case 'CREATE_TWEET':
            console.log("create_tweet from tweetReducer ", action.payload  )
            console.log("create_tweet old state from tweetReducer ", ...state  )
            
            saveStore( [...state, action.payload] )
            return (
                [...state, action.payload]
            )
            
        case 'CREATE_TWEET_ERROR':
            console.log("create_tweet_error from tweetReducer ", action.err  )
            return state;
        */}
        default:
            return state;   
    }
}


export default tweetReducer;