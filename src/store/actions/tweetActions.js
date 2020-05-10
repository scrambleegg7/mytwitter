import moment from 'moment';
import { v4 as uuid } from 'uuid';

const createPostHost = 'http://localhost:8080/post/new/';
const removePostHost = 'http://localhost:8080/post/';
//const updatePostHost = 'http://localhost:8080/post/';
const findUpdatePostHost = 'http://localhost:8080/post/update/';

const commentHost = "http://localhost:8080/post/comment/update";


const getPostsHost = "http://localhost:8080/posts"


const handleResponse = (response ) => {

    return response.text()
    .then( (text) => {


        const data = text && JSON.parse(text);

        console.log("handleResponse response text --> ",data)

        if (!response.ok) {
            if (response.status !== 200) {
                console.log("handleResponse", response)
            }
            const error = (data && (data.error || data.statusText) );
            console.log("error from handleResponse", error)
            return Promise.reject(error)
        }
        return data;
    })

};

const removePostOptions = (token) => {
    return ({
    method: 'DELETE',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` },
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

const updatePostOptions = (token, body) => {
    return ({
    method: 'PUT',
    headers: { 
        Accept: 'application/json',
        'Authorization' : `Bearer ${token}` },
    body: body
    })
    
};


const getPostsOptions = (token, userId) => {

    return ({
    method: 'GET',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` },
    //body: JSON.stringify({ userId })
    })
};

const commentOptions = (token, userId, postId, comment) => {
    return ({
    method: 'PUT',
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' ,
        'Authorization' : `Bearer ${token}` },
    body: JSON.stringify({userId, postId, comment})
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

export const updatePost = (credentials) => {

    const postId = credentials.postId;
    const token = credentials.token;
    const body = credentials.body;

    console.log("updatePost(tweetActions) body -> ", body);

    return (dispatch, getState) => {

        fetch(findUpdatePostHost + postId, updatePostOptions(token, body))
        .then(handleResponse)
        .then( (data) => {
            console.log("updatePost (tweetActions) ", data)
            dispatch({ type: "UPDATEPOST_SUCCESS",   data  })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'UPDATEPOST_ERROR', err });
        })
    }
}

export const getPosts = (credentials) => {

    const userId = credentials.userId;
    const token = credentials.token;

    return (dispatch, getState) => {

        fetch(getPostsHost, getPostsOptions(token, userId))
        .then(handleResponse)
        .then( (data) => {
            console.log("getPosts (tweetActions) ", data.posts)
            dispatch({ type: "GETPOST_SUCCESS",  data:  data.posts  })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'GETPOST_ERROR', err });
        })
    }
}


export const removePost = (credentials) => {

    const postId = credentials.postId;
    const token = credentials.token;
    
    //console.log("removePost(tweetActions) -> ")

    return (dispatch, getState) => {

        fetch(removePostHost + postId, removePostOptions(token))
        .then(handleResponse)
        .then( (data) => {
            console.log("removePost (tweetActions) ", data)
            dispatch({ type: "REMOVEPOST_SUCCESS",   data  })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'REMOVEPOST_ERROR', err });
        })
    }
}

export const commentUpdate = (credentials) => {

    const userId = credentials.userId;
    const postId = credentials.postId;
    const token = credentials.token;
    const comment = credentials.comment;


    const data = {
        userId, postId, comment
    }

    console.log("comment(tweetActions) comment data to be submit. -> ", data);

    return (dispatch, getState) => {

        fetch(commentHost, commentOptions(token, userId, postId, {text: comment }) )
        .then(handleResponse)
        .then( (data) => {
            console.log("comment (tweetActions) ", data)
            dispatch({ type: "COMMENT_SUCCESS",   data  })
        })
        .catch( (err) => {
            //console.log("signup error", err)            
            dispatch( { type: 'COMMENT_ERROR', err });
        })
    }


}


