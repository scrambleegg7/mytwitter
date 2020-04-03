import moment from 'moment';
import { v4 as uuid } from 'uuid';

export const createTweet = (payload) => {

    console.log("createTweet tweetActions : ", payload)

    return ( dispatch ) => {
        // make async 
        // const firestore = getFirestore();
        dispatch(
            {
                type: 'CREATE_TWEET', 
                payload: {
                    id: uuid(), // unique id of tweet
                    createdAt: moment(), // datetime object of tweet's creation
                    userId: null, // user's id
                    text: '', // content of the tweet
                    replyToId: null, // if the tweet is a reply, id to the original tweet
                    ...payload,
                    },                    
            })
        

    }

};



