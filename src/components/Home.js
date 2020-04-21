import React, { Component } from 'react';

import TweetInput from './TweetInput';
import MyTweet from './MyTweet';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createTweet, createPost, getPosts } from '../store/actions/tweetActions';
import { Grid } from '@material-ui/core';


const styles = (theme) =>  ( {
    root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
  
})

class Home extends Component {

    constructor(props) {
        super();
        console.log("Home constructor", props);
        props.getPosts(    props.data.token );
    }

    componentDidMount = () => {
        console.log("Home componentDidMount() ");
        this.props.getPosts(    this.props.data.token );
    }

    componentDidUpdate = () => {        
        console.log("Home componentDidUpdate() ");
    }

    onSubmit = text => {

        const { createTweet,createPost } = this.props;
        //console.log(this.props)
        console.log("Home post message (onSubmit):", text)
        //createTweet({ userId:"user123", text });
        createPost(text);
    
    };
    

    render () {
        
        const { classes, tweets, tweetsPost } = this.props;
        console.log("Home all tweets posted (consolidated after posting)", tweetsPost)

        if (tweetsPost) {

            console.log("Home posted tweets", tweetsPost)
            //const tweets = tweets.posts;
            
            return (
                <React.Fragment>
                    <Grid container className={classes.root}>
                        <Grid container={true} direction="column">
                            <Grid item={true}  xs={12} md={6} lg={10}>
                                <TweetInput onSubmit={this.onSubmit} />
                                
                                <Grid container direction="column" justify="center">

                                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                        {tweetsPost.map(tweet => (    
                                            
                                            (<Grid item={true}  xs={12} md={3} lg={3} key={tweet._id} >
                                                {tweet && ( <MyTweet {...tweet} key={tweet.id} /> ) }
                                            </Grid>) 
                        
                                            
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
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
        tweets: state.tweets.data,
        tweetsPost: state.tweets.postData,
        data : state.auth.data,

    }
);

const mapDispatchToProps = (dispatch) => {

    return {
        createTweet: (text => dispatch(createTweet(text))),
        createPost: (post) => dispatch( createPost(post) ) , 
        getPosts: (token) => dispatch( getPosts(token) ),

    }
}


export default  withStyles(styles)(  connect(mapStateToProps, mapDispatchToProps)  (Home) );