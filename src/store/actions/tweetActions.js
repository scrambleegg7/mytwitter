import moment from 'moment';
import { v4 as uuid } from 'uuid';

const createPostHost = 'http://localhost:8080/post/new/';
const getPostsHost = "http://localhost:8080/posts"


const handleResponse = (response ) => {

    return response.text()
    .then( (text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status !== 200) {
                console.log("handleResponse", response)
            }
            const error = (data && data.error || data.statusText );
            console.log("error from handleResponse", error)
            return Promise.reject(error)
        }
        return data;
    })

};



const createPostOptions = (token, body) => {
    return ({
    method: 'POST',
    headers: { 
        Accept: 'application/json',
        'Authorization' : `Bearer ${token}` },
    body: body
    })
    
};

const getPostsOptions = (token) => {
    return ({
    method: 'GET',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` },
    })
};


export const createPost = (credentials) => {

    const userId = credentials.userId;
    const token = credentials.token;
    const body = credentials.body

    console.log("createPost(tweetActions) body -> ", body)

    return (dispatch, getState) => {

        fetch(createPostHost + userId, createPostOptions(token, body))
        .then(handleResponse)
        .then( (data) => {
            console.log("createPost (tweetActions) ", data)
            dispatch({ type: "POST_SUCCESS",   data  })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'POST_ERROR', err });
        })
    }
}


export const getPosts = (token) => {

    return (dispatch, getState) => {

        fetch(getPostsHost, getPostsOptions(token))
        .then(handleResponse)
        .then( (data) => {
            console.log("post (tweetActions) ", data)
            dispatch({ type: "GETPOST_SUCCESS",   data  })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'GETPOST_ERROR', err });
        })
    }
}



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



