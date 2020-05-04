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
        //maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    headersection: {
        margin: theme.spacing(1),
        width: "30vm",
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        //maxWidth: "md",
        width: "30vm",
    },          
});

const CommentDisplay = (props) => {

    const {classes, comments} = props;

    const [commentsExist, setCommentExists] = useState(false);

    return (
        <div className={classes.root}>

        <Grid container direction="column" justify="flex-start" >
            {comments ? comments.map(
                comment => ( 

                    <div key={comment._id}>
                    <Paper className={classes.paper}>
                        <Grid container className={classes.headersection}>
                            <Grid item xs={1}>
                                <Avatar style={{backgroundColor: colorFrom(comment.postedBy.backgroundColor),}}  >
                                    {comment.postedBy.lastname.charAt(0) + comment.postedBy.firstname.charAt(0)}
                                </Avatar>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography gutterBottom variant="subtitle1">
                                    commented by {comment.postedBy.lastname}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {moment(comment.created).fromNow()}
                                </Typography>
                                <Typography variant="body2">
                                    {comment.text}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: "pointer" }}>
                                Remove
                            </Typography>
                        </Grid>
                    </Paper>
                    </div>
                ))
                :
                ""
            }

        </Grid>            
        </div>
    )

}



export default withStyles(styles)(CommentDisplay);