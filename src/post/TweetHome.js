import React, { Component } from 'react';

import TweetInput from '../containers/TweetInput';
import MyTweet from './MyTweet';
import { withStyles } from '@material-ui/core/styles';

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

class TweetHome extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            loading : true,
            data : this.props.data
        }

        this.props.getPosts(this.state.data.token);                
    }

    onSubmit = post => {

        const { createPost } = this.props;
        console.log("post message:", post)
        createPost(  post );


        this.props.getPosts(this.state.data.token);      
        this.setState({
            loading: false
        })
    };

    render () {

        
        const { classes, tweetError, tweets } = this.props;
        //const  tweets  = this.state.tweets ;
        if (tweets) {
            console.log("TweetHome tweets", tweets, tweetError)

            return (

                <React.Fragment>
    
                    <Grid container className={classes.root}>
                        <Grid container={true} direction="column">
                            <Grid item={true}  xs={12} md={6} lg={10}>
                                <TweetInput  onSubmit={this.onSubmit} />
                                
                                <Grid container direction="column" justify="center">
                                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                        {tweets.posts.map(tweet => ( 


                                            <Grid item={true}  xs={12} md={3} lg={3} key={tweet._id} >
                                            <MyTweet {...tweet} key={tweet._id} />
                                            </Grid>
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
            console.log("TweetHome tweets is empty.");
            //const tweets = [];
            return (
                <div>data loading...</div>
            )
        }
        }
}


export default  withStyles(styles)( TweetHome );