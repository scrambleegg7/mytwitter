import React, { Component } from 'react';

import TweetInput from './TweetInput';
import MyTweet from './TweetMain';
import {  withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createPost, getPosts, removePost, updatePost, commentUpdate, commentDelete } from '../store/actions/tweetActions';
import { Grid, Paper } from '@material-ui/core';

import { Redirect } from "react-router-dom";


const styles = (theme) =>  ( {
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 200,
        //width: 100,
      },

    paper_input: {
        height: 200,
        margin: theme.spacing.unit *0.2,
        //width: 100,
    },

      paper_post: {
        //height: 200,
        width: "100%",
        //padding: theme.spacing.unit,
        margin: theme.spacing.unit *0.2,        
      },

      
      control: {
        padding: theme.spacing(2),
      },
  
})

class Home extends Component {

    constructor(props) {
        super();
        console.log("Home constructor props", props);

        const data = props.data;

        this.state = {
            isLogin:false,
            isDeleted: false,
            token: data ? data.token : "",
            userId: data ? data.user._id : "",
            email:data ? data.user.email : "" , 
        }

        const credentials = {
            token: data ? data.token : "",
            userId: data ? data.user._id : "",
            email:data ? data.user.email : "" ,             
        }

        const firebaseToken = props.firebaseToken;
        console.log("Home : firebaseToken --> ", credentials.token)

        if (props.data) {
            props.getPosts(  credentials );
        }

    }

    componentDidMount = () => {
        console.log("Home componentDidMount() ");

    }

    componentDidUpdate = () => {        
        console.log("Home componentDidUpdate() call getPosts.");
    }

    onRemovePost = (credential) => {
        const { removePost } = this.props;
        console.log("Home removePost (onSubmit):", credential);
        removePost(credential);

        //this.setState({
        //    isDeleted: true,
        //})
    }

    onUpdatePost = (credential) => {

        const { updatePost } = this.props;

        const { body } = credential;
        console.log("Home updatePost (onSubmit):", credential);

        console.log("* Home updatePost (onSubmit) postData:", body)

        updatePost(credential);

    }

    onDeleteComment = (credential) => {
        
        const { commentDelete } = this.props;

        //const { body } = credential;
        console.log("*** Home deleteComment (onSubmit): ---> ", credential);
        commentDelete(credential);

    }

    onUpdateComment = (credential) => {

        const { commentUpdate } = this.props;

        //const { body } = credential;
        console.log("Home updateComment (onSubmit):", credential);
        commentUpdate(credential);
    }


    onSubmit = text => {

        const { createPost } = this.props;
        //console.log(this.props)
        console.log("Home post message (onSubmit):", text)
        //createTweet({ userId:"user123", text });
        createPost(text);
    
    };
    
    filterGeneralUser = () => {

        const {tweetsPost} = this.props;

        //console.log(tweetsPost)
        tweetsPost.sort((a, b) => {
            let dateA = new Date(a.created),
              dateB = new Date(b.created);
            return dateA - dateB;
          })
          .reverse();

        var rebels = tweetsPost.filter( (tweet) => {
            return tweet.postedBy.email !== "rmhmn777@gmail.com";
        });   
        return rebels;     

    }

    filterAdminlUser = () => {

        const {tweetsPost} = this.props;

        //console.log(tweetsPost)
        tweetsPost.sort((a, b) => {
            let dateA = new Date(a.created),
              dateB = new Date(b.created);
            return dateA - dateB;
          })
          .reverse();
          

        var rebels = tweetsPost.filter( (tweet) => {
            return tweet.postedBy.email === "rmhmn777@gmail.com";
        });   
        return rebels;     

    }


    render () {
        
        const { classes, data , tweetsPost, tweetsError } = this.props;
        console.log("Home all tweets posted (consolidated after posting)", tweetsPost)
        console.log("Home tweetError (render) : ", tweetsError)

        if (!data) {
            return <Redirect to={{pathname: "/signin" }} />
        }

        if (this.state.isDeleted && !tweetsError) {
            console.log("isDeleted:true non tweetError.")
            //return <Redirect to={ "/" } />
        }

        if (tweetsPost) {

            console.log("Home posted tweets", tweetsPost)
            //const tweets = tweets.posts;
            const generaluserposts = this.filterGeneralUser();
            const adminuserposts = this.filterAdminlUser();
            
            console.log("*** Home generaluserposts --> ", generaluserposts)


            return (
                <React.Fragment>
                    <Grid container>


                        <Grid item xs={6} md={10}>

                            <Paper className={classes.paper_input}>         
                                <TweetInput onSubmit={this.onSubmit} />
                            </Paper>
                            <Paper className={classes.paper_post}>                        
                                <Grid container direction="row">
                                    {this.filterGeneralUser().map(tweet => (
                                    <Grid item={true} xs={12} md={3} lg={3} key={tweet._id}>
                                        { tweet && ( <MyTweet tweet={tweet} data={data} 
                                            onRemovePost={this.onRemovePost} 
                                            onUpdatePost={this.onUpdatePost}
                                            onUpdateComment={this.onUpdateComment}
                                            onDeleteComment={this.onDeleteComment}
                                            
                                            key={tweet.id} /> ) }
                                    </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                        
                        
                        <Grid item xs={6} md={2}>
                            <Paper className={classes.paper_input}>
                            
                            </Paper>
                            <Paper className={classes.paper_post}>                        
                            {this.filterAdminlUser().map(tweet => (
                                    <Grid item={true} xs={12} md={12} lg={12} key={tweet._id}>
                                        { tweet && ( <MyTweet tweet={tweet} data={data} 
                                            onRemovePost={this.onRemovePost} 
                                            onUpdatePost={this.onUpdatePost}
                                            onUpdateComment={this.onUpdateComment}
                                            onDeleteComment={this.onDeleteComment}
                                            
                                            key={tweet.id} /> ) }
                                    </Grid>
                                    ))}
                            
                            </Paper>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )
        }
        else {
            return (
                <div>loading....</div>
            )
        }
    }
}

const mapStateToProps = state => (
    {
        //tweets: state.tweets.data,
        tweetsPost: state.tweets.postData,
        tweetsError: state.tweets.postError,
        firebaseAuth: state.firebase.auth,
        firebaseToken: state.auth.firebaseToken,         
        data : state.auth.data,

    }
);

const mapDispatchToProps = (dispatch) => {

    return {
        createPost: (post) => dispatch( createPost(post) ) ,
        removePost: (post) => dispatch( removePost(post) ) ,
        updatePost: (post) => dispatch( updatePost(post) ) ,
        getPosts: (token) => dispatch( getPosts(token) ),
        commentUpdate: (post) => dispatch( commentUpdate(post) ),
        commentDelete: (post) => dispatch( commentDelete(post) ),
    }
}


export default  withStyles(styles)(  connect(mapStateToProps, mapDispatchToProps)  (Home) );