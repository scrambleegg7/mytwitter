import React, {useState} from 'react';
import {Button, Avatar,  Card, withStyles,} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import colorFrom from '../utils/colors';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import moment from 'moment';

import Paper from '@material-ui/core/Paper';


const styles = theme => ({

    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    section3: {
        margin: theme.spacing(3, 1, 1),
    },
    paper: {
        padding: theme.spacing(2),
        //maxWidth: 500,
    },          
});

const CommentDisplay = (props) => {

    const {classes, comments} = props;

    const [commentsExist, setCommentExists] = useState(false);

    return (
        <div className={classes.root}>

        <Grid container spacing={2} alignItems="stretch" direction="column">
        <Paper elevation={3} >
            {comments ? comments.map(
                comment => ( 

                    
                    <div key={comment._id}>
                    <Divider />

                    <ListItem alignItems="flex-start" key={comment._id}>
                    <ListItemAvatar>
                        <Avatar 
                            style={{backgroundColor: colorFrom(comment.postedBy.backgroundColor),}}
                        >
                        { comment.postedBy.lastname.charAt(0) + comment.postedBy.firstname.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={comment.postedBy.lastname}   secondary={comment.text}>
                    {moment(comment.created).fromNow()}

                        
                    </ListItemText>
                    </ListItem>
                    <Divider variant="inset"  />
                    
                    </div>
                ))
                :
                ""
            }

        </Paper>
        </Grid>            
        </div>
    )

}



export default withStyles(styles)(CommentDisplay);