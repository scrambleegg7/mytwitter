import moment from 'moment';
import { saveStore, loadStore } from '../../utils/storage';

const loadstore = loadStore()

const InitState = loadstore ? loadstore : []


const tweetReducer = (state = InitState, action ) => {

    switch(action.type) {

        case 'POST_SUCCESS':
            console.log("create_tweet from tweetReducer ", action.data  )
            return {
                //...state, 
                data: [...state, action.data],
                postError: null
            }
            
        case 'POST_ERROR':
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
                data: action.data,
                postError: "ok"
            }
            
        case 'GETPOST_ERROR':
            console.log("get_tweet_error from tweetReducer ", action.err  )
            return {
                ...state, 
                data: null,
                postError: action.err
            }
    
        case 'CREATE_TWEET':
            console.log("create_tweet from tweetReducer ", action.payload  )
            saveStore( [...state, action.payload] )
            return (
                [...state, action.payload]
            )
            
        case 'CREATE_TWEET_ERROR':
            console.log("create_tweet_error from tweetReducer ", action.err  )
            return state;
    
        default:
            return state;   
    }
}


export default tweetReducer;