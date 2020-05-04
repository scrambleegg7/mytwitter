import React from 'react';
import {Button, withStyles,} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';

import PostTextDisplay from './PostTextDisplay';

import CommentTextDialog from './CommentTextDialog';

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

    const {classes, isValidUserId,  
            open, 
            Transition, 
            handleClose, 
            tweet, 
            text, 
            comment, 
            handleChangeCommentText,
            onUpdateCommentItem
        } = props;

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
            

                <PostTextDisplay tweet={tweet} />
                
                <CommentDisplay comments={comment} />

                {!isValidUserId ? 
                    (<CommentTextDialog 
                        handleChangeCommentText={handleChangeCommentText}
                        
                        />)
                    :
                    ""    
                }
            </DialogContent>
            
            
            <DialogActions>

                {!isValidUserId ? (
                    <Button onClick={onUpdateCommentItem} color="primary">
                        Update Comment
                    </Button>
                    )
                    :
                    ""
                }
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
            
        </Dialog>                
    )

}


export default withStyles(styles)(ViewDiaglog);
