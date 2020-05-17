import React, {useState} from 'react';
import {Button, Avatar,  Card, withStyles,} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import colorFrom from '../utils/colors';

import DeleteIcon from '@material-ui/icons/Delete';



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

    const {classes, comments, commentDelete, data, onDeleteCommentItem, tweet } = props;

    const [commentsExist, setCommentExists] = useState(false);
    //console.log("*** ComponentDisplay data (from redux)--> ", data )
    const handleCommentDelete = (comment) => {


        console.log("*** ComponentDisplay tweet post (from redux)--> ", tweet )
        console.log("*** ComponentDisplay target comment to be deleted (from redux)--> ", comment )
    

        const credential = {
            postId: tweet._id,
            comment: comment,
            token: data.token,
        }

        let answer = window.confirm("はあ?　ほんまに消すで。ええんか？")

        //setAnchorEl(null);

        if (answer) {
            commentDelete(credential);
        }



    }


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

                            <DeleteIcon onClick= { () => onDeleteCommentItem(comment) }   />

                        
                        
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