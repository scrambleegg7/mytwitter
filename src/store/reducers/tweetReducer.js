import moment from 'moment';
import { saveStore, loadStore } from '../../utils/storage';

const loadstore = loadStore()

const InitState = loadstore ? loadstore : []


const tweetReducer = (state = InitState, action ) => {

    if (state === undefined) {
        state = []
    }
    //   const data = loadStore();
    //console.log("loadStore from tweetRedudcer", ...state)


    switch(action.type) {
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