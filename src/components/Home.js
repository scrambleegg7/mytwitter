import React, { Component } from 'react';

import TweetInput from '../containers/TweetInput';
import MyTweet from './MyTweet';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { createTweet } from '../store/actions/tweetActions';
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



    onSubmit = text => {




        const {
          createTweet,
        
        } = this.props;
        console.log(this.props)
        console.log("post message:", text)
        createTweet({ userId:"user123", text });
      };
    

    render () {
        
        const { classes, tweets } = this.props;
        console.log("posted tweets", tweets)
        return (

            <React.Fragment>

                <Grid container className={classes.root}>
                    <Grid container={true} direction="column">
                        <Grid item={true}  xs={12} md={6} lg={10}>
                            <TweetInput onSubmit={this.onSubmit} />
                            
                            <Grid container direction="column" justify="center">

                                <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                                    {tweets.map(tweet => ( 
                                        <Grid item={true}  xs={12} md={3} lg={3} key={tweet.id} >
                                        <MyTweet {...tweet} key={tweet.id} />
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
}

const mapStateToProps = state => ({

    tweets: state.tweets,

  });

const mapDispatchToProps = (dispatch) => {

    return {
        createTweet: (text => dispatch(createTweet(text)))
    }
}


export default  withStyles(styles)(  connect(mapStateToProps, mapDispatchToProps)  (Home) );