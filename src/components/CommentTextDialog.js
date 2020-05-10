import React from 'react';
import {Button,TextField, Typography, withStyles,} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({

    root: {
        width: '100%',
        padding: theme.spacing(1),
        margin: theme.spacing(1),

        //maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },

})



const CommentTextDialog = (props) => {

    const { classes, handleChangeCommentText } = props;

    //const handleChangeCommentText = () => {
    //    console.log("CommentTextDialog handleChangeCommentText....")
    // }

    return (

        <form>

            <Grid container direction="column" justify="flex-start">

                <Grid item className={classes.root}>
                <Typography variant="h5">
                    コメントをどうぞ....
                </Typography>
                </Grid>


                <Grid item className={classes.root}>
                    <Typography variant="inherit">   
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        multiline
                        type="comment"
                        fullWidth
                        onChange={handleChangeCommentText("comment")}
                    />
                    </Typography>
                </Grid>
            </Grid>
        </form>
    )


}

export default withStyles(styles)(CommentTextDialog);

