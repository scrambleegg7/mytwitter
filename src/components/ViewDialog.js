import React from 'react';
import {Button, withStyles,} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CommentDisplay from './CommentDisplay';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    },
    tweetButton: {
        marginTop: theme.spacing.unit,
    },
});




const ViewDiaglog = (props) => {

    const {classes, open, Transition, handleClose, text, comment} = props;

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            maxWidth={"md"}
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">Post message</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {text}
                </DialogContentText>

                <CommentDisplay comments={comment} />

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>                
    )

}


export default withStyles(styles)(ViewDiaglog);
