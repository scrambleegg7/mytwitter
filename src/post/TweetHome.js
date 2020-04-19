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
        }

        const data = this.props.data;
        this.props.getPosts(data.token);                
    }

    componentDidMount = () => {

        const { data, tweets } = this.props;
        console.log("TweetHome componentDidMount", data)
        console.log("TweetHome componentDidMount", tweets)

        

        //this.props.getPosts(data.token);
    }

    componentDidUpdate = (prevProps) => {

        const {data, auth, tweets} = this.props;
        console.log("this.props.tweets --> " + data)
        console.log("prevProps.tweets --> " + prevProps)

    }

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
                                <TweetInput />
                                
                                <Grid container direction="column" justify="center">
                                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                        {tweets.posts.map(tweet => ( 
                                            <Grid item={true}  xs={12} md={3} lg={3} key={tweet.id} >
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
                <div>loading...</div>
            )
        }
        }
}


export default  withStyles(styles)( TweetHome );